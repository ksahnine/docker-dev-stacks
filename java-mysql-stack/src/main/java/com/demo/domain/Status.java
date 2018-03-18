package com.demo.domain;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlRootElement;

@XmlAccessorType(XmlAccessType.FIELD)
@XmlRootElement
public class Status {
    private Integer code;

    public Status() {}

    public Status code(Integer code) {
        this.code = code;
        return this;
    }
}