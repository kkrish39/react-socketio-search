import React from 'react'

import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Tooltip from '@material-ui/core/Tooltip'
import Grow from '@material-ui/core/Grow'
import { InfoOutlined, AccessAlarm, PermContactCalendarOutlined } from '@material-ui/icons';

import SlackLogo from '../assets/images/slack.svg'
import CalendarLogo from '../assets/images/calendar.svg'
import ContactsLogo from '../assets/images/contacts.svg'
import TwitterLogo from '../assets/images/Twitter_Logo_Blue.svg'
import DropBoxLogo from '../assets/images/DropboxTransp.svg'



import moment from 'moment'

const renderInfo = (data) => {
    var keys = Object.keys(data)
    var content = keys.map((key) => {
        if (key !== "matching_items" && key !== "id" &&
            key !== "timestamp" && key !== "matching_terms" && key !== "date"
            && key !== "last_contact" && key !== "created") {
            return <div>
                <Typography className='subtitle1' variant="subtitle1" gutterBottom>
                    {key}
                </Typography>
                <Typography className='body2' variant="body2" gutterBottom>
                    {data[key]}
                </Typography>
                <br />
            </div>
        }
        return null
    })

    return content
}
const IndividualCard = (props) => {
    const source_identifier = props.keySource
    switch (source_identifier) {
        case "slack":
            return (
                props.rows.map((item, index) => (
                    <Grow in={true} timeout={props.timeout} key={source_identifier + index + "-" + item.id}>
                        <Card className="search-card">
                            <CardMedia
                                className="search-card-logo"
                                image={SlackLogo}
                                title="SLACK"
                            />
                            <CardContent className="search-card-content">
                                <Typography variant='subtitle1'>
                                    {item.message}
                                </Typography>

                                <Typography className="search-card-subscript">
                                    {moment(item.timestamp).fromNow()}
                                </Typography>
                            </CardContent>
                            <CardActions className="search-card-action">
                                <Button size="small" variant="contained">Launch</Button>
                                <Tooltip
                                    arrow
                                    title={renderInfo(item)}
                                >
                                    <InfoOutlined className="search-card-info-icon" />
                                </Tooltip>
                            </CardActions>
                        </Card>
                    </Grow>
                )))

        case "dropbox":
            return (
                props.rows.map((item, index) => (
                    <Grow in={true} timeout={props.timeout} key={source_identifier + index + "-" + item.id}>
                        <Card className="search-card" >
                            <CardMedia
                                className="search-card-logo"
                                image={DropBoxLogo}
                                title="DROPBOX"
                            />
                            <CardContent className="search-card-content">
                                <Typography  >
                                    {item.title.replace(/["']/g, "")}
                                </Typography>
                                <Typography className="search-card-subscript">
                                    {moment(item.created).fromNow()}
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing className="search-card-action">
                                <Button size="small" variant="contained">Launch</Button>
                                <Tooltip
                                    className="tooltip"
                                    arrow
                                    title={renderInfo(item)}
                                >
                                    <InfoOutlined className="search-card-info-icon" />
                                </Tooltip>
                            </CardActions>
                        </Card>
                    </Grow>
                )))
        case "tweet":
            return (
                props.rows.map((item, index) => (
                    <Grow in={true} timeout={props.timeout} key={source_identifier + index + "-" + item.id}>
                        <Card className="search-card" >
                            <CardMedia
                                className="search-card-logo"
                                image={TwitterLogo}
                                title="TWITTER"
                            />
                            <CardContent className="search-card-content">
                                <Typography >
                                    {item.message}
                                </Typography>
                                <Typography className="search-card-subscript">
                                    {item.timestamp}
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing className="search-card-action">
                                <Button size="small" variant="contained">Launch</Button>
                                <Tooltip
                                    className="tooltip"
                                    arrow
                                    title={renderInfo(item)}
                                >
                                    <InfoOutlined className="search-card-info-icon" />
                                </Tooltip>
                            </CardActions>
                        </Card>
                    </Grow>
                )))
        case "calendar":
            return (
                props.rows.map((item, index) => (
                    <Grow in={true} timeout={props.timeout} key={source_identifier + index + "-" + item.id}>
                        <Card className="search-card">
                            <CardMedia
                                className="search-card-logo"
                                image={CalendarLogo}
                                title="CALENDAR"
                            />
                            <CardContent className="search-card-content">
                                <Typography  >
                                    {item.title}
                                </Typography>
                                <Typography className="search-card-subscript">
                                    {moment(item.date).format('LLL')}
                                </Typography>
                            </CardContent>
                            <CardActions className="search-card-action">
                                <Button size="small" variant="contained">Join</Button>
                                <Tooltip
                                    arrow
                                    title={renderInfo(item)}
                                >
                                    <AccessAlarm className="search-card-info-icon" />
                                </Tooltip>
                            </CardActions>
                        </Card>
                    </Grow>
                )))
        case "contacts":
            return (
                props.rows.map((item, index) => (
                    <Grow in={true} timeout={props.timeout} key={source_identifier + index + "-" + item.id}>
                        <Card className="search-card">
                            <CardMedia
                                className="search-card-logo"
                                image={ContactsLogo}
                                title="CONTACTS"
                            />
                            <CardContent className="search-card-content">
                                <Typography >
                                    {item.name}
                                </Typography>
                                <Typography className="search-card-subscript">
                                    last contacted {item.last_contact}
                                </Typography>
                            </CardContent>
                            <CardActions className="search-card-action">
                                <Button size="small" variant="contained">Reach out</Button>
                                <Tooltip
                                    arrow
                                    title={renderInfo(item)}
                                >
                                    <PermContactCalendarOutlined className="search-card-info-icon" />
                                </Tooltip>
                            </CardActions>
                        </Card>
                    </Grow>
                )))
        default:
            return <div></div>;
    }
}

export default IndividualCard;