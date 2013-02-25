from django.shortcuts import render_to_response
from django.template import RequestContext
from django.http import HttpResponse

from django.core.cache import cache

from django.views.decorators.csrf import csrf_exempt

from settings import THUMBS_SIZE, STATIC_ROOT
from genitalia.models import Genitalia
from genitalia.forms import GenitaliaForm, SinglePhotoForm

from utils.utils import qs_to_json
import json, random

# Create your views here.
def home(request):
    """ Index View """
    return render_to_response('genitalia/home.html', context_instance=RequestContext(request) )

@csrf_exempt
def photos_verify(request):
    """ Just verify if picture is valid """
    if request.method == 'GET':
        return render_to_response('genitalia/upload.html')
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

            return HttpResponse( json.dumps({'status': 'OK'}), mimetype='application/json' )
        else:
            return HttpResponse( json.dumps({'status': 'FAIL'}), mimetype='application/json' )

def photos_json(request):
    """ Server the photos as a JSON """
    def randomize_url(photo):
        choice = THUMBS_SIZE[0]
        return {'url': getattr(photo.image, 'url_%sx%s' % (choice[0],choice[1])), 'size': choice }

    data = cache.get( 'photos_json' ) or []

    # If no data
    if not data:
        for photo in Genitalia.objects.filter(approved=True):
            small = randomize_url(photo)
            data.append({
                    'id':           photo.id,
                    'url':          photo.image.url,
                    'url_small':    small['url'],
                    'type':         'size-%dx%d' % small['size']
                })
        cache.set('photos_json', data, 120)

    return HttpResponse( json.dumps(data), mimetype='application/json')

