<%@ page import="io.PostMapper" %>
<%@ page import="domain.Comment" %>
<%@ page import="io.CommentMapper" %>

<%@include file="header.jsp"%>

<div class="content-body">

    <%
        long postId = new Long(request.getParameter("postid"));

        if(request.getParameter("createComment") != null ) {
            if(request.getParameter("name") == null &&request.getParameter("title") == null &&request.getParameter("content") == null ){
                out.print("Fill out the form!");
            } else{
                Comment c = new Comment(request.getParameter("name"),request.getParameter("title"), request.getParameter("content"), postId);
                new CommentMapper().save(c);}
        }
        PostMapper pm = new PostMapper();

        if(request.getParameter("like") != null) {
            pm.addLike(postId);
        }
    %>

    <div class="post-body">
        <%
            out.print(pm.getById(postId).toHTML());
        %>

        <div class="sort like">
            <form action="post.jsp" method="post">
                <input type="hidden" name="postid" value="<%=postId%>">
                <input class="field left btn" type="submit" name="like" value="Like">
            </form>
        </div>

    </div>


    <div class="top">
        Comments section
        <%
            for (Comment c : new CommentMapper().getAllForEntity(postId)) {
        %>

        <div class="heading drinkname comment" ><%=c.getTitle()%></div>
        <div class="author comment"> Author: <%=c.getName()%></div>
        <div class="talk drinkdescription comment"><%=c.getContent()%></div>
        <%
            }
        %>



    </div>
</div>

<div class="comment black">
    <div class="con">
        <h1 class="register s">Talk to us </h1>
        <form action="post.jsp" method="post">
            <input type="hidden" name="postid" value="<%=postId%>">
            <table class="form_table">
                <input class="field xs" type="text" name="name" placeholder="your name"/>
                <input class="field xs" type="text" name="title" placeholder="title"/></td>
                <input class="field xs" type="text" name="content" placeholder="content"/></td>
                </tr>
                <tr>
                    <td class="content_right"><input class="field right s comm" type="submit" name="createComment" value="Create Comment!"/></td>
                </tr>
            </table>

        </form>
    </div>
</div>

<%@include file="footer.jsp"%>