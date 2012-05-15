from django.conf    import settings
from django.conf.urls import patterns, include, url

# Uncomment the next two lines to enable the admin:
from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    
    url(r'^$',               'app.perseguida.views.preview_home',    name='preview_home'),
    url(r'^home$',           'app.perseguida.views.home',            name='home'),
    url(r'^photos$',        'app.perseguida.views.photos',          name='photos'),
    url(r'^photos/upload$', 'app.perseguida.views.photos_upload',   name='photos_upload'),
    
    url(r'^admin/', include(admin.site.urls)),
    
    url(r'^media/(?P<path>.*)$', 'django.views.static.serve', {
        'document_root': settings.MEDIA_ROOT
    })
)