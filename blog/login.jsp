<%@ page import="domain.Author" %>
<%@ page import="io.AuthorMapper" %>

<%@include file="header.jsp"%>

<%
    if(request.getParameter("login") != null ) {
        Author a = new AuthorMapper().getEnityFromCredentials(request.getParameter("userName"), request.getParameter("password"));
        if(a == null){
            out.println("<h1>User not found</h2>");
            response.sendRedirect("login.jsp");
        } else{
            model.login(a.getDatabaseId());
            Author aa = new AuthorMapper().getById(model.getUserId());
            response.sendRedirect("loginArea.jsp");
        }
    }


%>


<div class="full drinks">
    <div class="contain">
        <div class="register">login</div>

        <form action="login.jsp" method="post">
                    <input class="field" type="text" name="userName" placeholder="name..." size="20"/>
                    <input class="field" type="password" name="password" placeholder="password..." size="20"/>
                    <input class="field left" type="submit" name="login" value="login"/>
        </form>
        <a href="signUp.jsp"><div class="field right">register</div></a>
    </div>
</div>


<%@include file="footer.jsp"%>
