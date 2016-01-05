from django.db import models
from hashlib import sha512

import uuid,os

from thumbs import ImageWithThumbsField

from django.conf import settings

def photo_hash(instance,filename):
    path = 'photos/'
    ext  = filename.split('.')[-1]
    filename = "%s.%s" % ( uuid.uuid4(), ext )

    return os.path.join( path, filename )

class Genitalia(models.Model):
    name             = models.CharField(max_length=128, blank=True)
    meta             = models.TextField(blank=True)
    updated_at       = models.DateTimeField(auto_now=True)
    created_at       = models.DateTimeField(auto_now_add=True)

    image            = ImageWithThumbsField(upload_to=photo_hash, sizes=settings.THUMBS_SIZE )
    hash             = models.CharField(max_length=255, editable=False,unique=False)
    approved         = models.BooleanField(default=False)

    class Meta:
        db_table = 'perseguida_perseguida'

    def as_thumb(self):
        return u"<img src=\"%s\"/>" % getattr(self.image,'url_150x225')

    as_thumb.short_description = 'Thumbnail'
    as_thumb.allow_tags  =  True
    as_thumb.admin_order_field = 'admin_thumbnail'


    def as_link(self):
        return u'<a href="%s">%s</a>' % (self.image.url , self.image)

    as_link.short_description = "PHOTO URL"
    as_link.allow_tags = True

    def get_hash(self):
        """ Generate hash of the image """
        # Force a seek to avoid empty read()
        self.image.seek(0)

        h = sha512()
        h.update(self.image.read())
        self.hash = h.hexdigest()

        return self.hash

    def save(self, *args, **kwargs):
        self.get_hash()
        return super(Genitalia, self).save(self,*args,**kwargs)

    def __unicode__(self):
        if not self.name:
            return '%s' % (self.image.name)
        else:
            return '%s - %s' % (self.name, self.image.name )
