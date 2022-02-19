from csv import list_dialects
from django.contrib import admin
from .models import Example, File

# Register your models here.
class ExampleAdmin(admin.ModelAdmin):
    list_display = ('title', 'description')

class FileAdmin(admin.ModelAdmin):
  list_dialects = ('name', 'filepath')

# Register your models here.

admin.site.register(Example, ExampleAdmin)
admin.site.register(File, FileAdmin)