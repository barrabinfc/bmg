from django.conf    import settings
from django.conf.urls import patterns, include, url

# Uncomment the next two lines to enable the admin:
from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    
    #url(r'^$',               'perseguida.views.preview_home',    name='preview_home'),
    url(r'^$',               'perseguida.views.home',            name='home'),
    #url(r'^preview$',        'perseguida.views.home',            name='home'),
    url(r'^photos$',        'perseguida.views.photos',          name='photos'),
    url(r'^photos/upload$', 'perseguida.views.photos_upload',   name='photos_upload'),
    
    url(r'^admin/', include(admin.site.urls)),    
)

if not settings.ON_WEBBY_NODE:
    urlpatterns += patterns('',
        url(r'^media/(?P<path>.*)$',  'django.views.static.serve', {
            'document_root': settings.MEDIA_ROOT
        }),
        #url(r'^static/(?P<path>.*)$', 'django.views.static.serve', {
        #    'document_root': settings.STATIC_ROOT
        #}),
    )