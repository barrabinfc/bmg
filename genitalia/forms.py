from django.forms import ModelForm
from models import Genitalia

class GenitaliaForm(ModelForm):
    class Meta:
        model = Genitalia
