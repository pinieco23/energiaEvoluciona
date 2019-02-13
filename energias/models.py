from datetime import datetime

from django.contrib.auth.models import User
from django.db import models

#Se crea el modelo en la base de datos de Usuario
from django.db.models import ImageField

#BD de Contenedor uno
class contenedor_1(models.Model):
    titulo = models.CharField(max_length=60)
    texto = models.TextField()
    texto_boton = models.CharField(max_length=60)
    fecha_creacion = models.DateTimeField(default=datetime.now, blank=True)
    disponible = models.BooleanField()

    def __str__(self):
        return self.titulo

#BD de Contenedor dos
class contenedor_2(models.Model):
    titulo = models.CharField(max_length=60)
    link = models.CharField(max_length=120)
    fecha_creacion = models.DateTimeField(default=datetime.now, blank=True)
    disponible = models.BooleanField()

    def __str__(self):
        return self.titulo



#BD de Contenedor tres
class contenedor_3(models.Model):
    titulo = models.CharField(max_length=60)
    texto = models.TextField()
    fecha_creacion = models.DateTimeField(default=datetime.now, blank=True)
    disponible = models.BooleanField()

    def __str__(self):
        return self.titulo

class imagenes_c3(models.Model):
    nombre_boton = models.CharField(max_length=60)
    imagen = models.ImageField(upload_to='imagesC3', blank=True)
    fecha_creacion = models.DateTimeField(default=datetime.now, blank=True)
    disponible = models.BooleanField()

    def __str__(self):
        return self.nombre_boton

class contenedor_5(models.Model):
    titulo = models.CharField(max_length=60)
    imagen = models.ImageField(upload_to='footer-img', blank=True)
    fecha_creacion = models.DateTimeField(default=datetime.now, blank=True)
    disponible = models.BooleanField()

    def __str__(self):
        return self.titulo

class experto(models.Model):
    nombre = models.CharField(max_length=60)
    cargo = models.TextField()
    descripcion = models.TextField()
    imagen = models.ImageField(upload_to='fotos', blank=True)
    fecha_creacion = models.DateTimeField(default=datetime.now, blank=True)
    disponible = models.BooleanField()

    def __str__(self):
        return self.nombre




#BD de redes
class redes(models.Model):
    titulo = models.CharField(max_length=60)
    descripcion = models.TextField()
    link  = models.CharField(max_length=60)
    imagen = models.ImageField(upload_to='fotos', blank=True)
    fecha_creacion = models.DateTimeField(default=datetime.now, blank=True)
    disponible = models.BooleanField()

    def __str__(self):
        return self.titulo
