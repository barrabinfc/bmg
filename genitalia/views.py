from django.shortcuts import render_to_response, redirect
from django.template import RequestContext
from django.http import HttpResponse

from django.core.cache import cache

from django.views.decorators.csrf import csrf_exempt

from django.conf.settings import THUMBS_SIZE, STATIC_ROOT
from genitalia.models import Genitalia
from genitalia.forms import GenitaliaForm, SinglePhotoForm

from utils.utils import qs_to_json
import json, random


def small_photo(photo):
    choice = THUMBS_SIZE[0]
    return {'url': getattr(photo.image, 'url_%sx%s' % (choice[0],choice[1])), 'size': choice }

def big_photo(photo):
    choice = THUMBS_SIZE[-1]
    return {'url': getattr(photo.image, 'url_%sx%s' % (choice[0],choice[1])), 'size': choice }


# Create your views here.
def home(request):
    """ Index View """
    return render_to_response('genitalia/home.html', context_instance=RequestContext(request) )

def home2(request):
    return render_to_response( 'genitalia/home2.html', context_instance=RequestContext(request))

def cache_clear(request):
    cache.clear()
    return redirect('/')

@csrf_exempt
def photos_verify(request):
    """ Just verify if picture is valid """
    if request.method == 'GET':
        return HttpResponse( json.dumps({'status': 'FAIL'}), mimetype='application/json' )
    elif request.method == 'POST':
        photo = SinglePhotoForm(request.POST, request.FILES)
        if photo.is_valid():
            return HttpResponse( json.dumps({'status': 'OK'}), mimetype='application/json')
        else:
            for field in photo:
                print field.name, field.errors

            return HttpResponse( json.dumps({'status': 'FAIL'}), mimetype='application/json' )

def photos_upload(request):
    """ Upload photos """
    if request.method == 'POST':
        photo = SinglePhotoForm(request.POST, request.FILES)
        if photo.is_valid():
            genitalia = Genitalia(name='',image=request.FILES['photo'])
            genitalia.save()
            return HttpResponse( json.dumps({'status': 'OK'}), mimetype='application/json' )
        else:
            return HttpResponse( json.dumps({'status': 'FAIL'}), mimetype='application/json' )

def photos_json(request):
    """ Server the photos as a JSON """
    data = cache.get( 'photos_json' ) or []

    # If no data
    if not data:
        for photo in Genitalia.objects.filter(approved=True).reverse():
        #for photo in Genitalia.objects.filter(approved=True):
            small = small_photo(photo)
            big   = big_photo(photo)
            data.append({
                    'id':           photo.id,
                    'url':           big['url'],
                    'url_small':    small['url'],
                    'type':         'size-%dx%d' % small['size']
                })
        cache.set('photos_json', data, 1200*10 )

    return HttpResponse( json.dumps(data), mimetype='application/json')

