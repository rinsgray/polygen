from django.db import models
from django.utils.translation import gettext_lazy as _
from django.utils.text import slugify
from django.urls import reverse
# Create your models here.
'''class Post(models.Model):
    title = models.CharField(_("Post title"), max_length=100)
    summary = models.CharField(_("Summary"), max_length=255)
    keywords = models.CharField(_("SEO Keywords"), max_length=255)
    body = models.TextField(_("Post body"))
    published = models.DateTimeField(auto_now=True)
    slug = models.SlugField(_("Slug"), max_length=255, default='', blank=True, unique=True)
    class Meta:
         verbose_name = _("Post")
         verbose_name_plural = _("Posts")

    def __str__(self):
            return self.title

    def get_absolute_url(self):
            return reverse("post_detail", kwargs={"slug": self.slug})

    def save(self, *args, **kwargs):
            self.slug = slugify(self.title)
            super().save(*args, **kwargs)'''


class Crack(models.Model):
    title = models.CharField(_("Crack number"), max_length=100)
    coordinates = models.FloatField(_("Crack coordinates"), max_length=100)
    slug = models.SlugField(_("Slug"), max_length=255, default='', blank=True, unique=True)
    class Meta:
         verbose_name = _("Crack")
         verbose_name_plural = _("Cracks")

    def __str__(self):
            return self.title

    def save(self, *args, **kwargs):
            self.slug = slugify(self.title)
            super().save(*args, **kwargs)
