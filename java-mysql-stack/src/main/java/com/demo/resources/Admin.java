package com.demo.resources;

import javax.annotation.Resource;
import javax.ws.rs.GET;
import javax.ws.rs.Path;

@Path("/admin")
public class Admin {

    @Resource(name="admin/contact")
    private String contact; 
    
    @GET
    @Path("ping")
    public String ping() {
        return "pong";
    }

    @GET
    @Path("contact")
    public String contact() {
        return this.contact;
    }

}
