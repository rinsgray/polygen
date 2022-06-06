import graphene
from graphene_django import DjangoObjectType
from polyhandler.models import Crack
#import polyhandler.schema

class CrackType(DjangoObjectType):
    class Meta:
        #model = Post
        model = Crack

class cQuery(graphene.ObjectType):
    all_cracks = graphene.List(CrackType)
    get_crack = graphene.Field(CrackType, slug=graphene.String())
    def resolve_all_cracks(self, info, **kwargs):
        return Crack.objects.all()

    def resolve_get_crack(self, info, **kwargs):
        slug = kwargs.get('slug')
        if slug is not None:
            return Crack.objects.get(slug=slug)
        return None

schema = graphene.Schema(query=cQuery)
