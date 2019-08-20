import datetime
from translate import Translator
from django.shortcuts import render, redirect
import psycopg2


from django.shortcuts import render
from django.http import HttpResponse

from energias.form import insForm, tallerForm, salidaForm, dataForm
from energias.models import inscritos


def error_404_view(request, exception):
    data = {"name": "ThePythonDjango.com"}
    return render(request,'error.html', data)

def transformacion(request):

    return render(request,'transformacion.html')

def inicio(request):

    #Desarrollo
    con = psycopg2.connect("host='energia.cr2plyypy4at.us-east-1.rds.amazonaws.com' dbname='energias' user='presidencia' password='Warroom2019'")

    #Produccion
    #con = psycopg2.connect("host='energia-prod.cr2plyypy4at.us-east-1.rds.amazonaws.com' dbname='energia-produccion' user='presidencia' password='Warroom2019'")

    cur = con.cursor()
    cur.execute("SELECT titulo, texto FROM energias_energiaEvoluciona WHERE disponible = True;")
    c1 = cur.fetchall()


    cur.execute("SELECT imagen, nombre_boton FROM energias_matriz WHERE disponible = True;")
    imagesc3 = cur.fetchall()

    cur.execute("SELECT titulo, texto, texto_boton_1, texto_boton_2, resumen, titulo_resumen, texto_boton_3 FROM energias_transicion WHERE disponible = True;")
    c3 = cur.fetchall()

    cur.execute("SELECT nombre, cargo,  imagen, id FROM energias_experto WHERE disponible = True ;")
    expertos = cur.fetchall()

    cur.execute("SELECT  link FROM energias_video WHERE disponible = True;")
    c2 = cur.fetchall()

    cur.execute("SELECT  descripcion FROM energias_para_comision WHERE disponible = True;")
    para = cur.fetchall()

    cur.execute("SELECT  id, descripcion, desc_general FROM energias_como_comision WHERE disponible = True ORDER BY id;")
    como = cur.fetchall()

    cur.execute("SELECT imagen, titulo_boton, link FROM energias_popup WHERE disponible = True ORDER BY id;")
    popup = cur.fetchall()

    cur.execute("SELECT imagen, link FROM energias_banner WHERE disponible = True;")
    banner = cur.fetchall()

    bansize = len(banner)
    print(bansize)


    return render(request, 'index.html',{'bansize':bansize,'banner':banner,'popup': popup,'c1':c1,'imagesc3':imagesc3,'c3':c3,'expertos':expertos,'c2':c2, 'para':para, 'como': como})



def expertos(request):

    # Desarrollo
    con = psycopg2.connect("host='energia.cr2plyypy4at.us-east-1.rds.amazonaws.com' dbname='energias' user='presidencia' password='Warroom2019'")

    # Produccion
    # con = psycopg2.connect("host='energia-prod.cr2plyypy4at.us-east-1.rds.amazonaws.com' dbname='energia-produccion' user='presidencia' password='Warroom2019'")

    cur = con.cursor()

    cur.execute("SELECT nombre, cargo, descripcion, imagen, id, link FROM energias_experto WHERE disponible = True ORDER BY id;")
    expertos = cur.fetchall()

    cur.execute("SELECT titulo, descripcion, imagen, nombre_boton1, nombre_boton2, upload1, upload2 FROM energias_comision WHERE disponible = True;")
    comision = cur.fetchall()

    return render(request, 'expertos.html',{'comision':comision, 'expertos':expertos})

def error(request):

    return render(request, 'error.html')

def minero(request):

    # Desarrollo
    con = psycopg2.connect("host='energia.cr2plyypy4at.us-east-1.rds.amazonaws.com' dbname='energias' user='presidencia' password='Warroom2019'")

    # Produccion
    # con = psycopg2.connect("host='energia-prod.cr2plyypy4at.us-east-1.rds.amazonaws.com' dbname='energia-produccion' user='presidencia' password='Warroom2019'")

    cur = con.cursor()
    cur.execute("SELECT imagen FROM energias_minero_energetico WHERE disponible = True;")
    minener = cur.fetchall()

    return render(request, 'minero.html',{'minener':minener})

def hidraulico(request):

    # Desarrollo
    con = psycopg2.connect("host='energia.cr2plyypy4at.us-east-1.rds.amazonaws.com' dbname='energias' user='presidencia' password='Warroom2019'")

    # Produccion
    # con = psycopg2.connect("host='energia-prod.cr2plyypy4at.us-east-1.rds.amazonaws.com' dbname='energia-produccion' user='presidencia' password='Warroom2019'")

    cur = con.cursor()
    cur.execute("SELECT imagen FROM energias_hidraulico WHERE disponible = True;")
    hidraulico = cur.fetchall()

    return render(request, 'hidraulica.html',{'hidraulico':hidraulico})

def subasta(request):

    # Desarrollo
    con = psycopg2.connect("host='energia.cr2plyypy4at.us-east-1.rds.amazonaws.com' dbname='energias' user='presidencia' password='Warroom2019'")

    # Produccion
    # con = psycopg2.connect("host='energia-prod.cr2plyypy4at.us-east-1.rds.amazonaws.com' dbname='energia-produccion' user='presidencia' password='Warroom2019'")

    cur = con.cursor()
    cur.execute("SELECT titulo, descripcion, link, upload FROM energias_subasta WHERE disponible = True;")
    subasta = cur.fetchall()

    return render(request, 'subasta.html',{'subasta':subasta})


def casos(request):

    # Desarrollo
    con = psycopg2.connect("host='energia.cr2plyypy4at.us-east-1.rds.amazonaws.com' dbname='energias' user='presidencia' password='Warroom2019'")

    # Produccion
    # con = psycopg2.connect("host='energia-prod.cr2plyypy4at.us-east-1.rds.amazonaws.com' dbname='energia-produccion' user='presidencia' password='Warroom2019'")

    cur = con.cursor()
    cur.execute("SELECT titulo, caso_1, caso_2, caso_3, caso_4, caso_5 FROM energias_casos_de_exito WHERE disponible = True;")
    casos = cur.fetchall()

    return render(request, 'casos.html',{'casos':casos})

def hidrocarburo(request):

    # Desarrollo
    con = psycopg2.connect("host='energia.cr2plyypy4at.us-east-1.rds.amazonaws.com' dbname='energias' user='presidencia' password='Warroom2019'")

    # Produccion
    # con = psycopg2.connect("host='energia-prod.cr2plyypy4at.us-east-1.rds.amazonaws.com' dbname='energia-produccion' user='presidencia' password='Warroom2019'")

    cur = con.cursor()
    cur.execute("SELECT imagen FROM energias_hidrocarburo WHERE disponible = True;")
    hidrocarburo = cur.fetchall()

    return render(request, 'hidrocarburo.html',{'hidrocarburo':hidrocarburo})

def fuentes(request):

    # Desarrollo
    con = psycopg2.connect("host='energia.cr2plyypy4at.us-east-1.rds.amazonaws.com' dbname='energias' user='presidencia' password='Warroom2019'")

    # Produccion
    # con = psycopg2.connect("host='energia-prod.cr2plyypy4at.us-east-1.rds.amazonaws.com' dbname='energia-produccion' user='presidencia' password='Warroom2019'")

    cur = con.cursor()
    cur.execute("SELECT imagen FROM energias_fuentes WHERE disponible = True;")
    fuentes = cur.fetchall()

    return render(request, 'fuentes.html',{'fuentes':fuentes})

def reservas(request):

    # Desarrollo
    con = psycopg2.connect("host='energia.cr2plyypy4at.us-east-1.rds.amazonaws.com' dbname='energias' user='presidencia' password='Warroom2019'")

    # Produccion
    # con = psycopg2.connect("host='energia-prod.cr2plyypy4at.us-east-1.rds.amazonaws.com' dbname='energia-produccion' user='presidencia' password='Warroom2019'")

    cur = con.cursor()
    cur.execute("SELECT titulo, descripcion, imagen, subtitulo, subdescripcion, link, nombre_boton FROM energias_reserva WHERE disponible = True;")
    form = cur.fetchall()

    cur = con.cursor()
    cur.execute("SELECT imagen, upload, nombre_boton1, nombre_boton2, upload2, nombre_boton3, imagen2 FROM energias_infografia WHERE disponible = True;")
    info = cur.fetchall()

    return render(request, 'reservas.html', {'form':form, 'info':info})


def infografiaGas(request):

    # Desarrollo
    con = psycopg2.connect("host='energia.cr2plyypy4at.us-east-1.rds.amazonaws.com' dbname='energias' user='presidencia' password='Warroom2019'")

    # Produccion
    # con = psycopg2.connect("host='energia-prod.cr2plyypy4at.us-east-1.rds.amazonaws.com' dbname='energia-produccion' user='presidencia' password='Warroom2019'")

    cur = con.cursor()
    cur.execute("SELECT titulo, descripcion, imagen, subtitulo, subdescripcion, link, nombre_boton FROM energias_gas WHERE disponible = True;")
    form = cur.fetchall()

    cur = con.cursor()
    cur.execute("SELECT imagen, upload, nombre_boton1, nombre_boton2, upload2, nombre_boton3, imagen2 FROM energias_infografia WHERE disponible = True;")
    info = cur.fetchall()

    return render(request, 'infografia-gas.html', {'info':info})

def infografiaReserva(request):

    # Desarrollo
    con = psycopg2.connect("host='energia.cr2plyypy4at.us-east-1.rds.amazonaws.com' dbname='energias' user='presidencia' password='Warroom2019'")

    # Produccion
    # con = psycopg2.connect("host='energia-prod.cr2plyypy4at.us-east-1.rds.amazonaws.com' dbname='energia-produccion' user='presidencia' password='Warroom2019'")

    cur = con.cursor()
    cur.execute("SELECT imagen, upload, nombre_boton1, nombre_boton2, upload2, nombre_boton3, imagen2 FROM energias_infografia WHERE disponible = True;")
    info = cur.fetchall()

    return render(request, 'infografia-reserva.html',{'info':info})

def historias(request):

    # Desarrollo
    con = psycopg2.connect("host='energia.cr2plyypy4at.us-east-1.rds.amazonaws.com' dbname='energias' user='presidencia' password='Warroom2019'")

    # Produccion
    # con = psycopg2.connect("host='energia-prod.cr2plyypy4at.us-east-1.rds.amazonaws.com' dbname='energia-produccion' user='presidencia' password='Warroom2019'")

    cur = con.cursor()
    cur.execute("SELECT titulo, descripcion, video FROM energias_historias WHERE disponible = True ;")
    historias = cur.fetchall()

    return render(request, 'historias.html',{'historias':historias})

def mitos(request):

    # Desarrollo
    con = psycopg2.connect("host='energia.cr2plyypy4at.us-east-1.rds.amazonaws.com' dbname='energias' user='presidencia' password='Warroom2019'")

    # Produccion
    # con = psycopg2.connect("host='energia-prod.cr2plyypy4at.us-east-1.rds.amazonaws.com' dbname='energia-produccion' user='presidencia' password='Warroom2019'")

    cur = con.cursor()
    cur.execute("SELECT mito, realidad_1, realidad_2, realidad_3, realidad_4, realidad_5 FROM energias_mitos_realidad WHERE disponible = True ORDER BY id;")
    mitos = cur.fetchall()

    return render(request, 'mitos.html', {'mitos':mitos})

def noticia(request):

    # Desarrollo
    con = psycopg2.connect("host='energia.cr2plyypy4at.us-east-1.rds.amazonaws.com' dbname='energias' user='presidencia' password='Warroom2019'")

    # Produccion
    # con = psycopg2.connect("host='energia-prod.cr2plyypy4at.us-east-1.rds.amazonaws.com' dbname='energia-produccion' user='presidencia' password='Warroom2019'")

    cur = con.cursor()
    cur.execute("SELECT titulo, descripcion, imagen, link, fecha_creacion FROM energias_noticia WHERE disponible = True AND noticia_principal = True ORDER BY id;")
    princial = cur.fetchall()

    cur.execute("SELECT titulo, descripcion, imagen, link, fecha_creacion, id-1 FROM energias_noticia WHERE disponible = True AND noticia_principal = False  ORDER BY id;")
    noticia = cur.fetchall()

    cur.execute("SELECT titulo, link FROM energias_tweet WHERE disponible = True;")
    tweet = cur.fetchall()

    npag = len(noticia)/3
    npag = int(npag)

    print(npag)

    finalNoticia=[]
    tmpNoticia=[]
    j = 0
    for i in range(len(noticia)) :
        tmpNoticia.append(noticia[i])
        if j == 2:
            finalNoticia.append(tmpNoticia)
            tmpNoticia=[]
            j=0
        else:
            j+=1

    return render(request, 'noticia.html', {'noticia':finalNoticia, 'tweet':tweet, 'principal':princial , 'npag':npag})



################################################################# Formulario

def vocero(request):
    formulariotaller = tallerForm()
    con = psycopg2.connect(
        "host='energia.cr2plyypy4at.us-east-1.rds.amazonaws.com' dbname='energias' user='presidencia' password='Warroom2019'")
    cur = con.cursor()
    cur.execute("SELECT * FROM energias_inscripcion",)
    rowe = cur.fetchall()
    if request.method == 'POST':
        form = tallerForm(request.POST)
        taller = form['taller'].value()

        if form.is_valid():
            con = psycopg2.connect("host='energia.cr2plyypy4at.us-east-1.rds.amazonaws.com' dbname='energias' user='presidencia' password='Warroom2019'")
            cur = con.cursor()
            cur.execute("SELECT s.nombres, s.apellidos, s.correo, s.telefono FROM energias_taller t, energias_inscripcion s WHERE t.id = %s AND s.taller_id = %s AND s.servidor_id = 1 AND s.candidato_id=1 AND s.participar_id = 1 AND s.vocero_confirmaciona = true AND s.ingreso_al_taller = true AND s.salida_del_taller = false ORDER BY RANDOM() LIMIT 1", (taller, taller))
            row = cur.fetchall()
            return render(request, 'sVocero.html', {'taller': formulariotaller, 'nombres':row})


    return render(request, 'vocero.html', {'taller':formulariotaller, 'aaa':rowe})

def sVocero(request):
    return render(request, 'vocero.html')

def candidato(request):
    return render(request, 'candidato.html')

def formularioMail(request):
    formulario = dataForm()
    if request.method == 'POST':
        form = dataForm(request.POST)

        if form.is_valid():

            form.save()

            return redirect('https://www.construyendopais.gov.co/paginas/usuario-registrado.aspx')

    else:
        formulario = dataForm()


    return render(request, 'formularioMail.html', {'formulario':formulario})

def formulario(request):
    now = datetime.datetime.now()
    now = now.astimezone()

    if request.method == 'POST':
        con = psycopg2.connect("host='energia.cr2plyypy4at.us-east-1.rds.amazonaws.com' dbname='energias' user='presidencia' password='Warroom2019'")
        cur = con.cursor()
        form = insForm(request.POST)
        nombre = form['nombres'].value()
        ciudad = form['ciudad'].value()
        cc = form['cedula'].value()
        candidato = form['candidato'].value()
        taller = form['taller'].value()
        print('Asigne las variables')
        #print(form['int_sectora'].value())

        if form.is_valid():
            print('Entre a la validacion')
            form.save()
            print('guardado')

            cur.execute("SELECT * FROM energias_taller WHERE id = %s ", (taller))

            row = cur.fetchall()
            row = row[0][2]
            translator = Translator(to_lang="es")
            translation = translator.translate(row.strftime("%A"))
            dia = translation+' '+str(row.day)
            translator = Translator(to_lang="es")
            translation = translator.translate(row.strftime("%B"))
            mes = translation
            anho = row.year

            print('asigne la fecha')

            if int(candidato) == 2:
                print('opcion si')
                return render(request, 'candidato.html', {'nombre':nombre, 'ciudad':ciudad, 'now':now, 'taller':taller, 'taller':row, 'dia':dia, 'mes':mes, 'anho':anho})
            else:
                print('opcion no')
                formularioIns = insForm()
                return render(request, 'gracias.html')

        else:
            return redirect('https://www.construyendopais.gov.co/Paginas/graciascp.aspx')


    else:
        formularioIns = insForm()
    return render(request, 'formulario.html', {'formulario':formularioIns})

def salida(request):
    now = datetime.datetime.now()
    now = now.astimezone()


    if request.method == 'POST':
        form = salidaForm(request.POST)
        cc = form['numero'].value()

        con = psycopg2.connect("host='energia.cr2plyypy4at.us-east-1.rds.amazonaws.com' dbname='energias' user='presidencia' password='Warroom2019'")
        cur = con.cursor()

        cur.execute("SELECT id FROM energias_inscritos WHERE cedula = %s AND cedula = %s", (cc, cc))
        row = cur.fetchall()

        p = inscritos.objects.get(pk=row[0][0])
        p.salida_del_taller = True
        p.save()
        pop = True

    else:
        formularioIns = salidaForm()
        pop = False

    formularioIns = salidaForm()
    print(pop)
    return render(request, 'salida.html', {'formulario':formularioIns, 'pop':pop})

def validacion(request):

    con = psycopg2.connect("host='energia.cr2plyypy4at.us-east-1.rds.amazonaws.com' dbname='energias' user='presidencia' password='Warroom2019'")
    cur = con.cursor()
    cur.execute("SELECT ins.cedula, ins.nombres, ins.apellidos, ins.cedula, ins.correo, ins.telefono FROM energias_inscripcion AS ins INNER JOIN energias_taller AS taller ON ins.taller_id = taller.id")
    row = cur.fetchall()

    return render(request, 'validacion.html', {'inscritos':row})


