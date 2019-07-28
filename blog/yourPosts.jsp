<%@ page import="domain.Post" %>
<%@ page import="io.PostMapper" %>
<%@ page import="io.AuthorMapper" %>
<%@include file="header.jsp"%>

<div class="drinks2" id="drinks">
    <div class="wrapper">
        <div class="heading middletop">Your posts</div>
        <div class="drinkscontainer">
            <%
                for(Post p : new PostMapper().getAllForEntity(model.getUserId()) ) {
            %>
            <div class="drinkcontainer">
                <div class="image">
                    <img src='<%=p.getImage()%>' height='280px'>
                </div>
                <div class="heading drinkname stop"><a href="post.jsp?postid=<%=p.getDatabaseId()%>"><%=p.getTitle()%></a></div>
                <div class="author"> Author: <%=new AuthorMapper().getById(p.getAuthorId()).getUsername()%></div>
                <div class="talk drinkdescription"><%=p.getContent()%></div>
                <div class="likes"> Likes: <%=p.getLikes()%></div>
            </div>
            <%
                }
            %>
        </div>
        <div class="push"></div>
    </div>
</div>


<%@include file="footer.jsp"%>