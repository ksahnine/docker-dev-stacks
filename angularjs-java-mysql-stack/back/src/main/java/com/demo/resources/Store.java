package com.demo.resources;

import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.GenericEntity;
import javax.ws.rs.core.Response;

import com.demo.domain.Status;
import com.demo.domain.Article;

@Stateless
@Path("/articles")
public class Store {

    @PersistenceContext(unitName = "store-PU")
    private EntityManager em;

    @GET
    @Produces({"application/xml","application/json"})
    public Response getAll() {
        TypedQuery<Article> query = em.createNamedQuery("findAll", Article.class);
        GenericEntity<List<Article>> result = new GenericEntity<List<Article>>(query.getResultList()) {};
        return Response.ok( result ).build();
    }

    @GET
    @Path("{id}")
    @Produces({"application/xml","application/json"})
    public Response get(@PathParam("id") String id) {
        Article article = em.find(Article.class, id);
        return Response.ok( article ).build();
    }

    @POST
    @Consumes({"application/xml","application/json"})
    @Produces({"application/xml","application/json"})
    public Response create(Article article) {
        em.persist(article);
        em.flush();
        return Response.ok( article ).build();
    }

    @DELETE
    @Path("{id}")
    @Produces({"application/xml","application/json"})
    public Response delete(@PathParam("id") String id) {
        Article article = em.find(Article.class, id);
        if ( article != null) 
            em.remove(article);
        
        return Response.ok( new Status().code(0) ).build();
    }

}
