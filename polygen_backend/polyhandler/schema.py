import graphene
from graphene_django.types import DjangoObjectType
from polyhandler.models import Post, Crack


class PostType(DjangoObjectType):
    class Meta:
        model = Post
        #model = Crack


'''class Query(object):
    all_posts = graphene.List(PostType)
    get_post = graphene.Field(PostType, slug=graphene.String())

    def resolve_all_posts(self, info, **kwargs):
        return Post.objects.all()

    def resolve_get_post(self, info, **kwargs):
        slug = kwargs.get('slug')
        if slug is not None:
            return Post.objects.get(slug=slug)
        return None'''


class CrackType(DjangoObjectType):
    class Meta:
        #model = Post
        model = Crack

class cQuery(graphene.ObjectType):
    all_cracks = graphene.List(CrackType)

    def resolve_all_cracks(self, info, **kwargs):
        return Crack.objects.all()

    def resolve_get_post(self, info, **kwargs):
        slug = kwargs.get('slug')
        if slug is not None:
            return Crack.objects.get(slug=slug)
        return None
