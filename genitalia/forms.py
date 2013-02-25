from django.forms import ModelForm, Form
from models import Genitalia

from django.forms.fields import ImageField

class GenitaliaForm(ModelForm):
    class Meta:
        model = Genitalia

class SinglePhotoForm(Form):
    photo = ImageField()
