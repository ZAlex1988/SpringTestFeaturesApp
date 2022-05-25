package org.zhid.beans;

public class ApisListItem {
    private String api;
    private String description;
    private String auth;
    private String https;
    private String cors;
    private String link;
    private String category;

    public String getApi() {
        return api;
    }

    public void setApi(String api) {
        this.api = api;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getAuth() {
        return auth;
    }

    public void setAuth(String auth) {
        this.auth = auth;
    }

    public String getHttps() {
        return https;
    }

    public void setHttps(String https) {
        this.https = https;
    }

    public String getCors() {
        return cors;
    }

    public void setCors(String cors) {
        this.cors = cors;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    @Override
    public String toString() {
        return "ApisListItem{" +
                "api='" + api + '\'' +
                ", description='" + description + '\'' +
                ", auth='" + auth + '\'' +
                ", https='" + https + '\'' +
                ", cors='" + cors + '\'' +
                ", link='" + link + '\'' +
                ", category='" + category + '\'' +
                '}';
    }
}
