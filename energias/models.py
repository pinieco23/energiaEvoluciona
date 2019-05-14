from datetime import datetime
from django.contrib.auth.models import User
from django.db import models

#Se crea el modelo en la base de datos de Usuario
from django.db.models import ImageField

#BD de Contenedor uno
class energiaEvoluciona(models.Model):
    titulo = models.CharField(max_length=60)
    texto = models.TextField()
    fecha_creacion = models.DateTimeField(default=datetime.now, blank=True)
    disponible = models.BooleanField()

    def __str__(self):
        return self.titulo

#BD de Contenedor dos
class video(models.Model):
    titulo = models.CharField(max_length=60)
    link = models.TextField()
    fecha_creacion = models.DateTimeField(default=datetime.now, blank=True)
    disponible = models.BooleanField()

    def __str__(self):
        return self.titulo



#BD de Contenedor tres
class transicion(models.Model):
    titulo = models.CharField(max_length=60)
    texto = models.TextField()
    titulo_resumen = models.CharField(max_length=60)
    resumen = models.TextField()
    texto_boton_1 = models.CharField(max_length=60)
    texto_boton_2 = models.CharField(max_length=60)
    texto_boton_3 = models.CharField(max_length=60)
    fecha_creacion = models.DateTimeField(default=datetime.now, blank=True)
    disponible = models.BooleanField()

    def __str__(self):
        return self.titulo

class matriz(models.Model):
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
    link = models.TextField(blank=True)
    imagen = models.ImageField(upload_to='fotos', blank=True)
    fecha_creacion = models.DateTimeField(default=datetime.now, blank=True)
    disponible = models.BooleanField()

    def __str__(self):
        return self.nombre

class subasta(models.Model):
    titulo = models.CharField(max_length=100)
    descripcion = models.TextField()
    link = models.TextField(blank=True)
    upload = models.FileField(upload_to='data', blank=True)
    fecha_creacion = models.DateTimeField(default=datetime.now, blank=True)
    disponible = models.BooleanField()

    def __str__(self):
        return self.titulo

class casos_de_exito(models.Model):
    titulo = models.CharField(max_length=100)
    caso_1 = models.TextField(blank=True)
    caso_2 = models.TextField(blank=True)
    caso_3 = models.TextField(blank=True)
    caso_4 = models.TextField(blank=True)
    caso_5 = models.TextField(blank=True)
    link = models.TextField(blank=True)
    upload = models.FileField(upload_to='casos', blank=True)
    fecha_creacion = models.DateTimeField(default=datetime.now, blank=True)
    disponible = models.BooleanField()

    def __str__(self):
        return self.titulo




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


class historias(models.Model):
    titulo = models.CharField(max_length=60, blank=True)
    descripcion = models.TextField(blank=True)
    link = models.CharField(max_length=60, blank=True)
    video = models.TextField(blank=True)
    fecha_creacion = models.DateTimeField(default=datetime.now, blank=True)
    disponible = models.BooleanField()

    def __str__(self):
        return self.titulo


#BD de redes
class comision(models.Model):
    titulo = models.CharField(max_length=60)
    descripcion = models.TextField()
    link  = models.CharField(max_length=60, blank=True)
    imagen = models.ImageField(upload_to='fotos', blank=True)
    fecha_creacion = models.DateTimeField(default=datetime.now, blank=True)
    disponible = models.BooleanField()

    def __str__(self):
        return self.titulo

class noticia(models.Model):
    titulo = models.CharField(max_length=80, blank=True)
    descripcion = models.TextField(max_length=700,blank=True)
    link  = models.TextField( blank=True)
    imagen = models.ImageField(upload_to='noticia', blank=True)
    fecha_creacion = models.DateTimeField(default=datetime.now, blank=True)
    noticia_principal = models.BooleanField()
    disponible = models.BooleanField()


    def __str__(self):
        return self.titulo

class gas(models.Model):
    titulo = models.CharField(max_length=200, blank=True)
    descripcion = models.TextField(max_length=6000,blank=True)
    imagen = models.ImageField(upload_to='gas', blank=True)
    subtitulo = models.CharField(max_length=80, blank=True)
    subdescripcion = models.TextField(max_length=2000, blank=True)
    disponible = models.BooleanField()
    link = models.TextField(blank=True)
    nombre_boton = models.CharField(max_length=80, blank=True)
    fecha_creacion = models.DateTimeField(default=datetime.now, blank=True)


    def __str__(self):
        return self.titulo


class reserva(models.Model):
    titulo = models.CharField(max_length=200, blank=True)
    descripcion = models.TextField(max_length=6000, blank=True)
    imagen = models.ImageField(upload_to='reserva', blank=True)
    subtitulo = models.CharField(max_length=80, blank=True)
    subdescripcion = models.TextField(max_length=2000, blank=True)
    disponible = models.BooleanField()
    link = models.TextField(blank=True)
    nombre_boton = models.CharField(max_length=80, blank=True)
    fecha_creacion = models.DateTimeField(default=datetime.now, blank=True)

    def __str__(self):
        return self.titulo


class tweet(models.Model):
    titulo = models.CharField(max_length=80, blank=True)
    link = models.TextField( blank=True)
    fecha_creacion = models.DateTimeField(default=datetime.now, blank=True)
    disponible = models.BooleanField()

    def __str__(self):
        return self.titulo

class popup(models.Model):
    titulo_boton = models.CharField(max_length=120)
    link = models.CharField(max_length=60, blank=True)
    imagen = models.ImageField(upload_to='popup', blank=True)
    fecha_creacion = models.DateTimeField(default=datetime.now, blank=True)
    disponible = models.BooleanField()

    def __str__(self):
        return self.titulo_boton

class fuentes(models.Model):

    intro = models.CharField(max_length=60)
    pro = models.TextField()
    contra = models.TextField()
    link = models.CharField(max_length=60, blank=True)
    imagen = models.ImageField(upload_to='fuentes', blank=True)
    fecha_creacion = models.DateTimeField(default=datetime.now, blank=True)
    disponible = models.BooleanField()

    def __str__(self):
        return self.intro

class minero_energetico(models.Model):

    titulo = models.CharField(max_length=60)
    imagen = models.ImageField(upload_to='minero', blank=True)
    fecha_creacion = models.DateTimeField(default=datetime.now, blank=True)
    disponible = models.BooleanField()

    def __str__(self):
        return self.titulo

class infografia(models.Model):

    titulo = models.CharField(max_length=60)
    imagen = models.ImageField(upload_to='infografia', blank=True)
    upload = models.FileField(upload_to='gas', blank=True)
    upload2 = models.FileField(upload_to='gas', blank=True)
    nombre_boton1 = models.CharField(max_length=80)
    nombre_boton2 = models.CharField(max_length=80)
    nombre_boton3 = models.CharField(max_length=80)
    fecha_creacion = models.DateTimeField(default=datetime.now, blank=True)
    disponible = models.BooleanField()

    def __str__(self):
        return self.titulo

class hidraulico(models.Model):

    titulo = models.CharField(max_length=60)
    imagen = models.ImageField(upload_to='hidraulico', blank=True)
    fecha_creacion = models.DateTimeField(default=datetime.now, blank=True)
    disponible = models.BooleanField()

    def __str__(self):
        return self.titulo

class hidrocarburo(models.Model):

    titulo = models.CharField(max_length=60)
    imagen = models.ImageField(upload_to='hidrocarburo', blank=True)
    fecha_creacion = models.DateTimeField(default=datetime.now, blank=True)
    disponible = models.BooleanField()

    def __str__(self):
        return self.titulo


class para_comision(models.Model):

    titulo = models.CharField(max_length=60)
    descripcion = models.TextField()
    fecha_creacion = models.DateTimeField(default=datetime.now, blank=True)
    disponible = models.BooleanField()

    def __str__(self):
        return self.titulo

class como_comision(models.Model):

    titulo = models.CharField(max_length=60)
    descripcion = models.TextField()
    desc_general = models.TextField()
    fecha_creacion = models.DateTimeField(default=datetime.now, blank=True)
    disponible = models.BooleanField()

    def __str__(self):
        return self.titulo

class imagenes_fuente(models.Model):

    titulo = models.CharField(max_length=60)
    header = models.ImageField(upload_to='fuentes', blank=True)
    imagen_1 = models.ImageField(upload_to='fuentes', blank=True)
    imagen_2 = models.ImageField(upload_to='fuentes', blank=True)
    imagen_3 = models.ImageField(upload_to='fuentes', blank=True)
    imagen_4  = models.ImageField(upload_to='fuentes', blank=True)
    imagen_5  = models.ImageField(upload_to='fuentes', blank=True)
    imagen_6  = models.ImageField(upload_to='fuentes', blank=True)
    imagen_7  = models.ImageField(upload_to='fuentes', blank=True)
    imagen_8  = models.ImageField(upload_to='fuentes', blank=True)
    imagen_9  = models.ImageField(upload_to='fuentes', blank=True)
    imagen_10  = models.ImageField(upload_to='fuentes', blank=True)
    imagen_11  = models.ImageField(upload_to='fuentes', blank=True)
    imagen_12  = models.ImageField(upload_to='fuentes', blank=True)
    imagen_13  = models.ImageField(upload_to='fuentes', blank=True)
    imagen_14  = models.ImageField(upload_to='fuentes', blank=True)
    imagen_15  = models.ImageField(upload_to='fuentes', blank=True)
    imagen_16 = models.ImageField(upload_to='fuentes', blank=True)
    imagen_17 = models.ImageField(upload_to='fuentes', blank=True)
    imagen_18 = models.ImageField(upload_to='fuentes', blank=True)
    imagen_19 = models.ImageField(upload_to='fuentes', blank=True)
    imagen_20 = models.ImageField(upload_to='fuentes', blank=True)
    imagen_21 = models.ImageField(upload_to='fuentes', blank=True)
    imagen_22 = models.ImageField(upload_to='fuentes', blank=True)
    imagen_23 = models.ImageField(upload_to='fuentes', blank=True)
    imagen_24 = models.ImageField(upload_to='fuentes', blank=True)
    imagen_25 = models.ImageField(upload_to='fuentes', blank=True)
    imagen_26 = models.ImageField(upload_to='fuentes', blank=True)
    imagen_27 = models.ImageField(upload_to='fuentes', blank=True)
    imagen_28 = models.ImageField(upload_to='fuentes', blank=True)


    footer = models.ImageField(upload_to='fuentes', blank=True)
    fecha_creacion = models.DateTimeField(default=datetime.now, blank=True)


    def __str__(self):
        return self.titulo


class mitos_realidad(models.Model):

    titulo = models.CharField(max_length=60)
    mito = models.CharField(max_length=200)
    realidad_1 = models.TextField(blank=True)
    realidad_2 = models.TextField(blank=True)
    realidad_3 = models.TextField(blank=True)
    realidad_4 = models.TextField(blank=True)
    realidad_5 = models.TextField(blank=True)
    fecha_creacion = models.DateTimeField(default=datetime.now, blank=True)
    disponible = models.BooleanField()

    def __str__(self):
        return self.titulo