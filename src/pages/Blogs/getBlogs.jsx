import axios from "axios";
import { useEffect, useState } from "react";
import { BLOGS_URI } from "../../data/api";

function getBlogs() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [allBlogPosts, setAllBlogPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [recentPosts, setRecentPosts] = useState([]);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    // Make a GET request using Axios
    axios
      .get(BLOGS_URI)
      .then((response) => {
        // Handle the successful response
        setAllBlogPosts(response.data.blogs);
        setBlogPosts(response.data.blogs);
        setRecentPosts(response.data.recent_blogs);
        setStatus(true);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error fetching doctor details:", error);
        setStatus(false);
      });
  }, []);

  // Filter categories
  allBlogPosts.map((value) => {
    if (!categories.includes(value.category)) {
      // filters.push(value.category);
      setCategories([...categories, value.category]);
    }
  });

  const handleBlogsFilter = (index) => {
    if (index == 0) {
      setBlogPosts(allBlogPosts);
    } else {
      const filteredPosts = allBlogPosts.filter((posts) => {
        return posts.category === index;
      });
      setBlogPosts(filteredPosts);
    }
  };

  return {
    blogPosts: blogPosts,
    allBlogPosts: allBlogPosts,
    categories: categories,
    recentPosts: recentPosts,
    status: status,
    handleBlogsFilter: handleBlogsFilter,
  };
}

export default getBlogs;
