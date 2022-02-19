from django.contrib import admin
from .models import Example

# Register your models here.
class ExampleAdmin(admin.ModelAdmin):
    list_display = ('title', 'description')

# Register your models here.

admin.site.register(Example, ExampleAdmin)