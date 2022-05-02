import graphene
from graphene_django.types import DjangoObjectType
from polyhandler.models import Post


class PostType(DjangoObjectType):
    class Meta:
        model = Post


class Query(object):
    all_posts = graphene.List(PostType)
    get_post = graphene.Field(PostType, slug=graphene.String())

    def resolve_all_posts(self, info, **kwargs):
        return Post.objects.all()

    def resolve_get_post(self, info, **kwargs):
        slug = kwargs.get('slug')
        if slug is not None:
            return Post.objects.get(slug=slug)
        return None
