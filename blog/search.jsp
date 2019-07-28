<%@ page import="domain.Post" %>
<%@ page import="io.PostMapper" %>
<%@ page import="domain.Comment" %>
<%@ page import="io.CommentMapper" %>

<%@include file="header.jsp"%>


<div class="content-body">
    <div class="post-body">
        <%
        if(request.getParameter("submitSearch") != null ) {
                            String searchString = request.getParameter("search");
                            for (Post p : new PostMapper().findEntity(searchString)) {
                                out.print("");
                                out.print(p.toHTML());
                            }
                        }
        %>
    </div>
</div>











<%@include file="footer.jsp"%>
