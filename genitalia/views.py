from django.shortcuts import render_to_response, redirect
from django.template import RequestContext
from django.http import HttpResponse

from django.core.cache import cache

from django.views.decorators.csrf import csrf_exempt

from django.conf import settings
from genitalia.models import Genitalia
from genitalia.forms import GenitaliaForm, SinglePhotoForm

from utils.utils import qs_to_json , json_response
import json, random


def small_photo(photo):
    choice = settings.THUMBS_SIZE[0]
    return {'url': getattr(photo.image, 'url_%sx%s' % (choice[0],choice[1])), 'size': choice }

def big_photo(photo):
    choice = settings.THUMBS_SIZE[-1]
    return {'url': getattr(photo.image, 'url_%sx%s' % (choice[0],choice[1])), 'size': choice }

# Create your views here.
def home(request):
    """ Index View """
    return render_to_response('genitalia/home.html', context_instance=RequestContext(request) )

# Create your views here.
def pugs(request):
    """ Index View """
    return render_to_response('genitalia/pugs.html', context_instance=RequestContext(request) )


def cache_clear(request):
    cache.clear()
    return redirect('/')

@csrf_exempt
def photos_verify(request):
    """ Just verify if picture is valid """
    if request.method == 'GET':
        return json_response({'status': 'FAIL'}, 403)
    elif request.method == 'POST':
        photo = SinglePhotoForm(request.POST, request.FILES)
        if photo.is_valid():
            return json_response({'status': 'OK'})
        else:
            return json_response({'status': 'FAIL'}, 403)


def photos_upload(request):
    """ Upload photos """
    if request.method == 'POST':
        photo = SinglePhotoForm(request.POST, request.FILES)
        if photo.is_valid():
            genitalia = Genitalia(name='',image=request.FILES['photo'])
            already_uploaded = Genitalia.objects.filter(hash=genitalia.get_hash())
            if not already_uploaded:
                genitalia.save()
                return json_response({'status': 'OK'})
            else:
                return json_response({'status': 'FAIL','error': 'Picture already uploaded'}, 403)
        else:
            return json_response({'status': 'FAIL','error': 'Not a valid picture'}, 403)

    return json_response({'status': 'FAIL'}, 403)


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

    return json_response( data )

def pugs_json(request):
    from pugs import pugs
    data = []
    for i,pug in enumerate(pugs):
        data.append({'id': i, 'url': pug['url'] , 'url_small': pug['url'], 'type': pug['ratio'] })

    return json_response( data )
