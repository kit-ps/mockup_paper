from django.urls import path
from . import views

urlpatterns=[
path("slider",views.slider,name="slider"),
path("slider_v",views.slider_v,name="slider_v"),
path("slider2",views.slider2,name="slider2"),
path("slider_v2",views.slider_v2,name="slider_v2"),
path("reading",views.reading,name="reading"),
path("reading_v",views.reading_v,name="reading_v"),
path("success",views.success,name="success"),
path("fail",views.fail,name="fail"),
path("",views.index,name="index"),
path("test",views.test,name="test"),
path("dots",views.dots,name="dots"),
path("dots_v",views.dots_v,name="dots_v"),
path("face",views.face,name="face"),
path("face_v",views.face_v,name="face_v"),
path("register", views.random_page, name="register"),
path("sentence_v",views.sentence_v,name="sentence_v"),
path("sentence",views.sentence,name="sentence")

]