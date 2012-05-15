from django.contrib import admin
from perseguida.models import Perseguida

class PerseguidaAdmin( admin.ModelAdmin ):
    fields = ['approved','name','image',]
    list_display = ['image','name','admin_thumbnail','approved']
    actions = ['publish_perseguida','unpublish_perseguida']

    def publish_perseguida(modeladmin, request, queryset):
        queryset.update(approved=True)
    publish_perseguida.short_description = 'Approve selected photos'

    def unpublish_perseguida(modeladmin, request, queryset):
        queryset.update(approved=False)
    unpublish_perseguida.short_description = 'Reject selected photos'

admin.site.register( Perseguida, PerseguidaAdmin )