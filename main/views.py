from django.shortcuts import render
from django.shortcuts import redirect
from django.http import HttpResponse
import random as rd
# Create your views here.

def slider(response):
	return render(response,"main/slider.html",{})

def slider_v(response):
	return render(response,"main/slider_v.html",{})

def slider2(response):
	return render(response,"main/slider2.html",{})

def slider_v2(response):
	return render(response,"main/slider_v2.html",{})

def reading(response):
	return render(response,"main/reading.html",{})

def reading_v(response):
	return render(response,"main/reading_v.html",{})



def index(response):
	tc=response.GET['e']
	tasks=["http://127.0.0.1:8000/?e=1ifs","http://127.0.0.1:8000/?e=2sdr"]
	selected_page = rd.choice(tasks)
	if tc[0]=='s':
		return redirect(selected_page)

	return render(response,"main/indexn.html",{'e':tc})

def success(response):
	if response.GET['t']=="done":
		return render(response,"main/success_a.html",{})
	else:
		return render(response,"main/success.html",{'t':response.GET['t']})

	

def fail(response):
	return render(response,"main/fail.html",{'t':response.GET['t']})
    
def test(response):
	return render(response,"main/test.html",{})
    
def dots(response):
	return render(response,"main/dots.html",{})


def dots_v(response):
	return render(response,"main/dots_v.html",{})
    
def face(response):
	return render(response,"main/face.html",{})
	
def face_v(response):
	return render(response,"main/face_v.html",{})


def sentence(response):
	return render(response,"main/sentence.html",{})

def sentence_v(response):
	return render(response,"main/sentence_v.html",{})

def random_page(request):
	tc=request.GET['e']
	if tc[0]=='1':
		tasks=[]
		if "i" in tc:
			tasks.append("slider")
		if "s" in tc:
			tasks.append("sentence")
		if "f" in tc:
			tasks.append("face")
		selected_page = rd.choice(tasks)
	elif tc[0]=='2':
		tasks=[]
		if "s" in tc:
			tasks.append("slider2")
		if "d" in tc:
			tasks.append("dots")
		if "r" in tc:
			tasks.append("reading")
		selected_page = rd.choice(tasks)
	else:
		selected_page='index'
	return redirect(selected_page)