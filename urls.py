from django.conf    import settings
from django.conf.urls import patterns, include, url

# Uncomment the next two lines to enable the admin:
from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',

    url(r'^$',               'genitalia.views.home',            name='home'),
    url(r'^ng$',               'genitalia.views.home2',         name='home'),

    url(r'^photos/json$',    'genitalia.views.photos_json',     name='photos_json'),
    url(r'^photos/verify$',  'genitalia.views.photos_verify',   name='photos_verify'),
    url(r'^photos/upload$',  'genitalia.views.photos_upload',   name='photos_upload'),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^grappelli/', include('grappelli.urls')),
)

print settings.ON_PRODUCTION
# Include static and media urls
if not settings.ON_PRODUCTION:
    urlpatterns += patterns('',
        url(r'^media/(?P<path>.*)$',  'django.views.static.serve', {
            'document_root': settings.MEDIA_ROOT
        }),

        # serves the static files under MEDIA_ROOT
        # This is for dev purposes. This way you don't need to alter
        # the templates when on production, just point them to
        # STATIC_URL
        url(r'^static/grappelli/(?P<path>.*)$', 'django.views.static.serve', {
            'document_root': settings.STATIC_ROOT + 'grappelli/'
        }),
        url(r'^static/admin/(?P<path>.*)$', 'django.views.static.serve', {
            'document_root': settings.STATIC_ROOT + 'admin/'
        }),

        url(r'^static/(?P<path>.*)$', 'django.views.static.serve', {
            'document_root': settings.STATICFILES_DIRS[0]
        })

    )
