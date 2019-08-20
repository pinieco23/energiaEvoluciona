from django.forms import ModelForm, forms
from django import forms

from energias.models import inscripcion, taller, inscritos


class insForm(ModelForm):
    class Meta:
        model = inscritos
        fields = ('nombres', 'apellidos', 'cedula', 'correo', 'telefono', 'servidor','entidad', 'cargo', 'taller', 'candidato', 'participar', 'interes','ciudad', 'int_sectora')


class tallerForm(ModelForm):
    class Meta:
        model = inscritos
        fields = ('taller', 'correo')

class salidaForm(forms.Form):
    numero = forms.IntegerField(label='Ingrese un numero')



