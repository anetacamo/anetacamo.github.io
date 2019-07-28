<%@ page import="domain.Author" %>
<%@ page import="io.AuthorMapper" %>
<%@ page import="domain.Post" %>
<%@ page import="io.PostMapper" %>
<%@ page import="domain.Comment" %>
<%@ page import="io.CommentMapper" %>
<%@include file="header.jsp"%>

<% if(model.isLoggedIn()){%>
<div class="logbg">

    <h3 class="heading supertop">This is the secret login area!!!Hello</h3>


    <%
        if(request.getParameter("logout") != null){
            model.logout();
            out.print("You logged out.");
            response.sendRedirect("index.jsp");
        }

        if(request.getParameter("yourPosts") != null){
            response.sendRedirect("yourPosts.jsp");
        }
    %>
    <div class="sort middletop">

        <form action="loginArea.jsp">
            <input class="field btn log" type="submit" name="logout" value="Logout"/>
        </form>
        <form action="yourPosts.jsp">
            <input class="field btn log" type="submit" name="yourPosts" value="See your posts!"/>
        </form>
        <form action="loginArea.jsp">
            <input class="field btn log" type="submit" name="delete" value="Delete your Account and Posts"/>
        </form>
        <form action="loginArea.jsp">
            <input class="field btn log" type="submit" name="deleteOnlyAuthor" value="Delete ONLY your Account"/>
        </form>
    </div>
    <%
            CommentMapper cm = new CommentMapper();
            PostMapper pm = new PostMapper();

            if(request.getParameter("deleteOnlyAuthor") != null){
                for(Post p : pm.getAllForEntity(model.getUserId())){
                    pm.setAuthor(-2, p.getDatabaseId());
                }
                new AuthorMapper().removeById(model.getUserId());
                model.logout();
                response.sendRedirect("index.jsp");
            }

            if(request.getParameter("delete") != null){
                for(Post p : pm.getAllForEntity(model.getUserId())){
                    for(Comment c :cm.getAllForEntity(p.getDatabaseId())){
                        cm.removeById(c.getDatabaseId());
                        System.out.print("Comment deleted!");
                    }

                    System.out.println(p.getDatabaseId());
                    System.out.println(pm.removeById(p.getDatabaseId()));
                }
                new AuthorMapper().removeById(model.getUserId());
                model.logout();
                response.sendRedirect("index.jsp");
            }
        } else{
            response.sendRedirect("index.jsp");
        }%>
    <div class="drinkscontainer"><div class="push"></div>
    </div>


</div>




<%@include file="footer.jsp"%>