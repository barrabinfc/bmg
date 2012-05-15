
from django.core import serializers
json_s = serializers.get_serializer('json')()
def qs_to_json( queryset ):
    """ Serialize a queryset to json """
    return json_s.serialize( queryset ,ensure_ascii=False )