from django.conf    import settings
from django.conf.urls import patterns, include, url

# Uncomment the next two lines to enable the admin:
from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',

    url(r'^$',               'genitalia.views.home',            name='home'),
    url(r'^photos$',         'genitalia.views.photos',          name='photos'),
    url(r'^photos/upload$',  'genitalia.views.photos_upload',   name='photos_upload'),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^grappelli/', include('grappelli.urls')),
)


# Include static and media urls
if not settings.ON_PRODUCTION:
    urlpatterns += patterns('',
        url(r'^media/(?P<path>.*)$',  'django.views.static.serve', {
            'document_root': settings.MEDIA_ROOT
        }),
        url(r'^static/(?P<path>.*)$', 'django.views.static.serve', {
            'document_root': settings.STATIC_ROOT
        }),
    )
