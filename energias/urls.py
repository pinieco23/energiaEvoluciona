"""energias URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.conf.urls import url
from django.contrib import admin
from django.urls import path

from energias import control

from django.conf import settings
from django.conf.urls.static import static

from django.contrib import admin
from django.urls import path, include
from django.conf.urls import handler404

urlpatterns = [
    path('LudveJYU2ytT3WuG7RAp3iqrH6y6aan9qXUQuQ/', admin.site.urls),
    path('', control.inicio, name='inicio'),
    url(r'^$', control.inicio),
    url('expertos', control.expertos),
    url('error', control.error),
    url('fuentes', control.fuentes),
    url('minero-energetico', control.minero),
    url('estimulacion-hidraulica', control.hidraulico),
    url('hidrocarburo', control.hidrocarburo),
    url('mitos-realidades', control.mitos),
    url('subasta', control.subasta),
    url('casos-de-exito', control.casos),
    url('noticias', control.noticia),
    url('historias', control.historias),
    url('transformacion', control.transformacion),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

handler404 = 'energias.control.error_404_view'