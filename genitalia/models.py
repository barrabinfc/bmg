from django.db import models
from hashlib import sha512

from thumbs import ImageWithThumbsField

from settings import THUMBS_SIZE

class Genitalia(models.Model):
    name             = models.CharField(max_length=128, blank=True)
    meta             = models.TextField(blank=True)
    updated_at       = models.DateTimeField(auto_now=True)
    created_at       = models.DateTimeField(auto_now_add=True)

    hash             = models.CharField(max_length=255, editable=False)
    image            = ImageWithThumbsField(upload_to='photos/', sizes=THUMBS_SIZE )

    approved         = models.BooleanField(default=False)

    def as_thumb(self):
        return u"<img src=\"%s\"/>" % getattr(self.image,'url_150x225')
    as_thumb.short_description = 'Thumbnail'
    as_thumb.allow_tags  =  True
    as_thumb.admin_order_field = 'admin_thumbnail'


    def as_link(self):
        return u'<a href="%s">%s</a>' % (self.image.url , self.image)
    as_link.short_description = "PHOTO URL"
    as_link.allow_tags = True

    def save(self, *args, **kwargs):
        """ Generate hash of the image """
        h = sha512()
        h.update(self.image.read())
        self.hash = h.hexdigest()
        return super(Photo, self).save(self,*args,**kwargs)

    def __unicode__(self):
        if not self.name:
            return '%s' % (self.image.name)
        else:
            return '%s - %s' % (self.name, self.image.name )
