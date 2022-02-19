from django.db import models

# Create your models here.
class Example(models.Model):
  title = models.CharField(max_length=255)
  description = models.TextField(default=None)

  def _str_(self):
    return self.title