from django.contrib import admin
from genitalia.models import Genitalia
from django.contrib.admin import BooleanFieldListFilter

class GenitaliaAdmin( admin.ModelAdmin ):

    def unpublish(self, request, queryset):
        rows = queryset.update(approved=False)
        msg  = '%s photos were rejected!' % rows
        self.message_user(request, msg)

    unpublish.short_description = 'Reject photos'

    def publish(self, request, queryset):
        rows = queryset.update(approved=True)
        msg  = '%s photos were published!' % rows
        self.message_user(request, msg)

    publish.short_description = 'Publish photos'

    list_display = ['approved','as_link','as_thumb']
    actions      = ['publish','unpublish']

    list_filter  = [ 'approved', ]
    ordering = ['approved','-created_at',]

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
