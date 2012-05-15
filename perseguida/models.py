from django.db import models
from hashlib import sha512

from thumbs import ImageWithThumbsField

from settings import THUMBS_SIZE 

# Create your models here.
class Perseguida(models.Model):
    name             = models.CharField(max_length=128, blank=True)
    meta             = models.TextField(blank=True)
    updated_at       = models.DateTimeField(auto_now=True) 
    created_at       = models.DateTimeField(auto_now_add=True)
    
    hash  = models.CharField(max_length=1000, unique=True, editable=False)
    image = ImageWithThumbsField(upload_to='photos/', sizes=THUMBS_SIZE )
    
    approved         = models.BooleanField(default=False)

    def admin_thumbnail(self):
        #return u'<img src="%s" label="x"/>' % getattr(self.image, 'url_256x256.jpg')
        return u"<img src=\"%s\"/>" % getattr(self.image,'url_125x150')

    admin_thumbnail.short_description = 'Thumbnail'
    admin_thumbnail.allow_tags = True
    
    def save(self, *args, **kwargs):
        """ Generate hash of the image """
        h = sha512()
        h.update(self.image.read())
        self.hash = h.hexdigest()
        return super(Perseguida, self).save(self,*args,**kwargs)

    def __unicode__(self):
        if not self.name:
            return '%s' % (self.image.name)
        else:
            return '%s - %s' % (self.name, self.image.name )