import React from 'react';
import { FormattedMessage, FormattedDate } from 'react-intl';

const ReportsFilters = ({
  domains,
  domainSelected,
  pages,
  changeDomain,
  pageSelected,
  changePage,
  changePeriod,
  periodSelectedDays,
}) => {
  return (
    <header className="report-filters">
      <div className="report-wrapper">
        <h3>
          <FormattedMessage id="reports_filters.title" />
        </h3>
        <p>
          <FormattedMessage id="reports_filters.description" />
        </p>
        <form action="#" className="form-filters">
          <fieldset className="filter">
            <label htmlFor="domain">
              <FormattedMessage id="reports_filters.domain" />
            </label>
            <span className="dropdown-arrow" />
            <select
              onChange={(event) => changeDomain(parseInt(event.target.value))}
              id="domain"
              disabled={!domains.length}
              value={domainSelected ? domainSelected.id : ''}
            >
              {domains.map((domain, index) => (
                <option key={index} value={domain.id}>
                  {domain.name}
                </option>
              ))}
            </select>
            {domainSelected ? (
              <span className="verified--domain">
                <FormattedMessage id="reports_filters.verified_domain" />{' '}
                <FormattedDate value={domainSelected.verified_date} timeZone="UTC" />
              </span>
            ) : null}
          </fieldset>
          <fieldset className="filter">
            <label htmlFor="pages">
              <FormattedMessage id="reports_filters.pages" />
            </label>
            <span className="dropdown-arrow" />
            <select
              value={pageSelected ? pageSelected.id : '-1'}
              id="pages"
              name="pages"
              onChange={(event) => changePage(parseInt(event.target.value))}
              disabled={!pages.length}
            >
              <FormattedMessage id="reports_filters.all_pages">
                {(message) => <option value="-1">{message}</option>}
              </FormattedMessage>
              {pages.map((page, index) => (
                <option key={index} value={page.id}>
                  {page.name}
                </option>
              ))}
            </select>
          </fieldset>
          <fieldset className="filter">
            <label htmlFor="range_time">
              <FormattedMessage id="reports_filters.rank_time" />
            </label>
            <span className="dropdown-arrow" />
            <select
              id="range_time"
              value={periodSelectedDays}
              onChange={(event) => changePeriod(parseInt(event.target.value))}
            >
              <FormattedMessage id="reports_filters.rank_time_item1">
                {(message) => <option value="7">{message}</option>}
              </FormattedMessage>
              <FormattedMessage id="reports_filters.rank_time_item2">
                {(message) => <option value="30">{message}</option>}
              </FormattedMessage>
              <FormattedMessage id="reports_filters.rank_time_item3">
                {(message) => <option value="90">{message}</option>}
              </FormattedMessage>
              <FormattedMessage id="reports_filters.rank_time_item4">
                {(message) => <option value="180">{message}</option>}
              </FormattedMessage>
            </select>
          </fieldset>
        </form>
        <span className="arrow" />
      </div>
    </header>
  );
};

export default ReportsFilters;
