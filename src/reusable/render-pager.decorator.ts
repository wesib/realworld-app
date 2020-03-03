import { HandleNavLinks } from '@wesib/generic';
import {
  BootstrapWindow,
  ComponentClass,
  ComponentContext,
  ComponentDef,
  ComponentProperty,
  ComponentPropertyDecorator,
} from '@wesib/wesib';
import { StatePath } from 'fun-events';
import { RenderHTML } from './render-html.decorator';

export type PagingInfo =
    | PagingInfo.Empty
    | PagingInfo.WithPages;

export namespace PagingInfo {

  export interface Empty {
    readonly totalPages?: 0 | 1;
    readonly visiblePages?: number;
    readonly currentPage?: number;
    pageHref?(page: number): string;
  }

  export interface WithPages {
    readonly totalPages: number;
    readonly visiblePages?: number;
    readonly currentPage?: number;
    pageHref(page: number): string;
  }

}

const PagingInfo__symbol = (/*#__PURE__*/ Symbol('paging-info'));

export function RenderPager<T extends ComponentClass>(): ComponentPropertyDecorator<PagingInfo, T> {
  return ComponentProperty(({ get, set, key }) => {

    const path: StatePath = [PagingInfo__symbol, key];

    return {
      componentDef: ComponentDef.all(
          RenderHTML({ path, comment: `PAGER(${String(key)})` }).As(pagerContent, key),
          HandleNavLinks(),
      ),
      get,
      set(component, value) {

        const prev = get(component);

        set(component, value);
        ComponentContext.of(component).updateState(path, value, prev);
      },
    };

    function pagerContent(this: InstanceType<T>): Node | undefined {

      const context = ComponentContext.of(this);
      const { document } = context.get(BootstrapWindow);
      const pagingInfo = get(this);

      if (!pagingInfo.totalPages || pagingInfo.totalPages <= 1) {
        return;
      }

      const info = pagingInfo as PagingInfo.WithPages;
      const { totalPages, visiblePages = 5, currentPage = 0 } = info;

      const visible = Math.max(1, visiblePages);
      const current = Math.max(0, currentPage);

      const ul = document.createElement('ul');

      ul.className = 'pagination';

      let startPage = Math.max(0, current - (visible >> 1));
      let endPage = startPage + visible;

      if (endPage > totalPages) {
        startPage = Math.max(0, startPage - (endPage - totalPages));
        endPage = totalPages;
      }

      ul.appendChild(pageItem('<<', 0, current > 0));
      ul.appendChild(pageItem('<', current - 1, current > 0));
      for (let page = startPage; page < endPage; ++page) {
        ul.appendChild(pageItem(String(page + 1), page, true, current === page));
      }
      ul.appendChild(pageItem('>', current + 1, current + 1 < totalPages));
      ul.appendChild(pageItem('>>', totalPages - 1, current + 1 < totalPages));

      return ul;

      function pageItem(
          text: string,
          page: number,
          enabled: boolean,
          active = false,
      ): HTMLLIElement {

        const li = document.createElement('li');

        li.className = 'page-item';

        let link: HTMLElement;

        if (enabled && !active) {
          link = document.createElement('a');
          link.setAttribute('href', info.pageHref(page));
        } else {
          li.classList.add(active ? 'active' : 'disabled');
          link = document.createElement('span');
        }
        link.className = 'page-link';
        link.innerHTML = text;
        li.appendChild(link);

        return li;
      }
    }

  });
}
