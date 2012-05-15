from django.forms import ModelForm
from models import Perseguida

class PerseguidaForm(ModelForm):
    class Meta:
        model = Perseguida