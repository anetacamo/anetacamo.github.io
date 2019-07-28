<%@ page import="io.AuthorMapper" %>
<%@ page import="domain.Post" %>
<%@ page import="io.PostMapper" %>
<%@ page import="java.util.ArrayList" %>
<%@ page import="java.util.Collections" %>
<%@include file="header.jsp"%>

<div class="full drinks3">
    <div class="contain front">
        <div class="heading shadowB">Find drinks here</div>
        <div class="talk">Here you can find all of our wonderfull drink recepies <br>Go crazy!</div>
        <a href="#drinks"><div class="field button">okay.</div></a>
    </div>
</div>

<div class="content-body">
    <div class="talk drinksort">Sort Drinks by: </div>
    <form action="drinks.jsp" method="post">
        <input class="field left btn" type="submit" name="sortLike" value="Most Popular">
    </form>

    <form action="drinks.jsp" method="post">
        <input class="field left btn" type="submit" name="sortDate" value="Most Recent">
    </form>
</div>

<div class="drinks2" id="drinks">
    <div class="wrapper">
        <div class="heading">Drinks</div>
        <div class="talk"></div>

        <div class="drinkscontainer">
            <%
                ArrayList<Post> posts = new PostMapper().getAll();

                if(request.getParameter("sortLike") != null){
                    Collections.sort(posts);
                }
                if(request.getParameter("sortDate") != null) {
                    posts = new PostMapper().getAll();
                }
                for(Post p : posts ) {
            %>

            <div class="drinkcontainer">
                <%--<div class="image i02"></div>--%>

                <div class="image">
                    <%--<img src='" + this.image + "' width='160px'>--%>
                    <img src='<%=p.getImage()%>' height='280px'>
                    <%--<img src='../img/<%=p.getTitle()%>.png' width='160px'>--%>
                </div>

                <div class="heading drinkname top"><a href="post.jsp?postid=<%=p.getDatabaseId()%>"><%=p.getTitle()%></a></div>
                <div class="talk drinkdescription"><%=p.getContent()%></div>
                <div class="author">written by <%=new AuthorMapper().getById(p.getAuthorId()).getUsername()%></div>
                <div class="likes"><%=p.getLikes()%> likes</div>
            </div>
            <%
                }
            %>
        </div>

        <div class="push"></div>
    </div>
</div>



<%@include file="footer.jsp"%>