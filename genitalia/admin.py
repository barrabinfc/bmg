from django.contrib import admin
from genitalia.models import Genitalia
from django.contrib.admin import BooleanFieldListFilter

from django.core.cache import cache

class GenitaliaAdmin( admin.ModelAdmin ):

    def unpublish(self, request, queryset):
        rows = queryset.update(approved=False)
        msg  = '%s photos were rejected!' % rows
        self.message_user(request, msg)

        # Clean the cache!
        cache.delete('photos_json')

    unpublish.short_description = 'Reject photos'

    def publish(self, request, queryset):
        rows = queryset.update(approved=True)
        msg  = '%s photos were published!' % rows
        self.message_user(request, msg)

        # Clean the cache!
        cache.delete('photos_json')

    publish.short_description = 'Publish photos'

    list_display = ['id','approved','as_link','as_thumb']
    actions      = ['publish','unpublish']

    list_filter  = [ 'approved', ]
    ordering = ['approved','-id','-created_at',]

    save_on_top = True
    actions_on_top = True
    date_hierarchy = 'updated_at'

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

admin.site.register( Genitalia, GenitaliaAdmin )
