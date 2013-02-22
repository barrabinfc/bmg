from django.contrib import admin
from perseguida.models import Perseguida
from django.contrib.admin import BooleanFieldListFilter

class PerseguidaAdmin( admin.ModelAdmin ):

    def unpublish_perseguida(self, request, queryset):
        rows = queryset.update(approved=False)
        msg  = '%s photos were rejected!' % rows
        self.message_user(request, msg)

    unpublish_perseguida.short_description = 'Reject photos'

    def publish_perseguida(self, request, queryset):
        rows = queryset.update(approved=True)
        msg  = '%s photos were published!' % rows
        self.message_user(request, msg)

    publish_perseguida.short_description = 'Publish photos'

    list_display = ['approved','image','admin_thumbnail']
    actions      = ['publish_perseguida','unpublish_perseguida']

    list_filter  = [ 'approved', ]
    ordering = ['approved','-created_at',]

    change_list_template = "admin/change_list_filter_sidebar.html"
    change_list_filter_template = "admin/filter_listing.html"

    fieldsets = (
        ('Image', {
                'fields': ('image',)
        }),
        ('', {
                'fields': ('name','approved'),
        }),
    )

admin.site.register( Perseguida, PerseguidaAdmin )
