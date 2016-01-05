
from django.core import serializers
import json, random
from django.http import HttpResponse

json_s = serializers.get_serializer('json')()

def qs_to_json( queryset ):
    """ Serialize a queryset to json """
    return json_s.serialize( queryset ,ensure_ascii=False )

def json_response( data , status_code=200):
    t = HttpResponse( json.dumps(data), mimetype='application/json' )
    t.status_code = status_code
    return t
