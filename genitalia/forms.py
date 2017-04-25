from django.forms import ModelForm, Form
from models import Genitalia

from django.forms.fields import ImageField

class GenitaliaForm(ModelForm):
    class Meta:
        model = Genitalia
        fields = '__all__' # Or a list of the fields that you want to include in your form

class SinglePhotoForm(Form):
    photo = ImageField()
