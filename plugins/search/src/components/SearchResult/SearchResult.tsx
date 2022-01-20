/*
 * Copyright 2021 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  EmptyState,
  Progress,
  ResponseErrorPanel,
} from '@backstage/core-components';
import { SearchResult } from '@backstage/search-common';
import React, { useCallback, useEffect, useState } from 'react';
import { useSearch } from '../SearchContext';

type Props = {
  children: (results: { results: SearchResult[] }) => JSX.Element;
};

export const SearchResultComponent = ({ children }: Props) => {
  const {
    result: { loading, error, value },
    fetchNextPage,
  } = useSearch();

  const [node, setDOMNode] = useState<HTMLElement | null>();

  const handleScroll = useCallback(
    (e: Event) => {
      const element = e.target as HTMLElement;
      const isEndReached =
        element.scrollHeight - Math.abs(element.scrollTop) <=
        element.clientHeight;

      if (isEndReached) {
        fetchNextPage?.();
      }
    },
    [fetchNextPage],
  );

  const handleScrollOnWindow = useCallback(() => {
    if (document.scrollingElement) {
      handleScroll({ target: document.scrollingElement } as unknown as Event);
    }
  }, [handleScroll]);

  useEffect(() => {
    if (!node) {
      return () => {
        /* */
      };
    }
    let element = node.parentElement;
    while (element) {
      const overflow = getComputedStyle(element).getPropertyValue('overflow');
      if (['scroll', 'auto'].includes(overflow)) {
        break;
      }
      element = element.parentElement;
    }

    if (element) {
      const target = element;
      target.addEventListener('scroll', handleScroll);
      return () => target.removeEventListener('scroll', handleScroll);
    }

    document.addEventListener('scroll', handleScrollOnWindow);
    return () => document.removeEventListener('scroll', handleScrollOnWindow);
  }, [handleScroll, handleScrollOnWindow, node]);

  if (loading && !value) {
    return <Progress />;
  }
  if (error) {
    return (
      <ResponseErrorPanel
        title="Error encountered while fetching search results"
        error={error}
      />
    );
  }

  if (!value?.results.length) {
    return <EmptyState missing="data" title="Sorry, no results were found" />;
  }

  return <div ref={setDOMNode}>{children({ results: value.results })}</div>;
};

export { SearchResultComponent as SearchResult };
