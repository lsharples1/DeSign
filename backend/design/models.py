from django.db import models

# Create your models here.
class Example(models.Model):
  title = models.CharField(max_length=255)
  description = models.TextField(default=None)

  def _str_(self):
    return self.title

class File(models.Model):
  id = models.BigAutoField(primary_key=True)
  filepath = models.FileField(upload_to='files', blank=True)

  def __str__(self):
      return str(self.filepath)