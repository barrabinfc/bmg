from django.shortcuts import render_to_response
from django.template import RequestContext
from django.http import HttpResponse

from django.views.decorators.csrf import csrf_exempt

from settings import THUMBS_SIZE
from perseguida.models import Perseguida
from perseguida.forms import PerseguidaForm

from utils.utils import qs_to_json
import json, random

def preview_home(request):
    return render_to_response('perseguida/preview_home.html', context_instance=RequestContext(request))

# Create your views here.
def home(request):
    """ Index View """
    perseguidas = Perseguida.objects.all()
    return render_to_response('perseguida/home.html', {perseguidas: perseguidas}, 
                                context_instance=RequestContext(request) )
                                

@csrf_exempt
def photos_upload(request):
    """ Upload a picture """
    if request.method == 'GET':
        return render_to_response('perseguida/upload.html')
    elif request.method == 'POST':
        photo = PerseguidaForm(request.POST, request.FILES)
        if photo.is_valid():
            photo.save()
            
            return HttpResponse('OK')
        else:
            print photo.errors
            for field in photo:
                print field.name, field.errors
            
            return HttpResponse('FAIL')
                                
def photos(request):
    """ Server the photos as a JSON """
    def randomize_url(photo):
        #return {'url': getattr(photo.image, 'url_128x128'), 'size': (128,128)}
        #return {'url': getattr(photo.image, 'url_512x512'), 'size': (512,512)}
        #choice = random.choice( THUMBS_SIZE[:2] )
        choice = THUMBS_SIZE[0]
        return {'url': getattr(photo.image, 'url_%sx%s' % (choice[0],choice[1])), 'size': choice }
        
    data = []
    for photo in Perseguida.objects.filter(approved=True):
        small = randomize_url(photo)
        data.append({
                'id':  photo.id,
                'url': photo.image.url,
                'url_small': small['url'],
                'type':      'size-%dx%d' % small['size']
            })
    return HttpResponse( json.dumps(data), mimetype='application/json')
    