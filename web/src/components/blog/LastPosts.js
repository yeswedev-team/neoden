import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import React, { useEffect } from 'react';
import Sticky from 'react-stickynode';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { Link } from '@gatsbyjs/reach-router';
import { getBlogUrl } from '../../utils/helpers';

const LastPostsStyles = styled.div`
  max-width: 16.875rem;

  .posts-list {
    margin-top: 1.75rem;
  }
  .middle-title {
    font-family: var(--font-titles);
  }

  .last-post {
    a {
      display: flex;
      margin-bottom: 1.25rem;
    }

    .last-post__content__title {
      font-family: var(--font-titles);
      font-size: 1.25rem;
      font-weight: normal;
      line-height: 0.909091;
      margin-top: 0;
      margin-bottom: 0;
    }
    .date {
      color: var(--beige);
      font-size: 1rem;
      font-weight: 500;
      margin-bottom: 0;
      margin-top: 0.3125rem;
    }

    &__content {
      padding-left: 0.75rem;
      width: 10.875rem;
    }
  }
  .gatsby-image-wrapper {
    height: 5.75rem;
    width: 5.75rem;
  }
  img {
    border-radius: 0;
  }
`;

export default function LastPosts({ posts }) {
  let windowWidth = 0;

  if (typeof window !== 'undefined') {
    windowWidth = window.innerWidth;
  }

  const [width, setWidth] = React.useState(windowWidth);
  const breakpoint = 1280;

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener('resize', handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, []);

  // const handleStateChange = (status) => {
  //   if (status.status === Sticky.STATUS_FIXED) {
  //     console.log('the component is sticky');
  //   }
  //   if (status.status === Sticky.STATUS_ORIGINAL) {
  //     return 'the component in the original position';
  //   }
  //   return 'the component is released';
  // };

  return (
    <Sticky
      enabled={width > breakpoint}
      top={200}
      bottomBoundary="#content"
      // onStateChange={handleStateChange}
    >
      <LastPostsStyles>
        <span className="middle-title">Articles récents</span>
        <div className="posts-list">
          {posts?.map((post) => (
            <div key={post.node.id} className="last-post">
              <Link
                to={getBlogUrl(post.node.publishedAt, post.node.slug.current)}
              >
                <GatsbyImage
                  image={getImage(post?.node?.mainImage?.asset)}
                  alt={post.node.title}
                />
                <div className="last-post__content">
                  <p className="last-post__content__title">{post.node.title}</p>
                  <p className="date">
                    {format(new Date(post.node.publishedAt), 'dd MMMM yyyy', {
                      locale: fr,
                    })}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </LastPostsStyles>
    </Sticky>
  );
}
