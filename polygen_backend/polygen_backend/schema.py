import graphene
import polyhandler.schema

class Query(polyhandler.schema.Query, graphene.ObjectType):
    pass

schema = graphene.Schema(query=Query)
