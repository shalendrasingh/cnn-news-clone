import React from 'react'
import {
  CategoryWrapper,
  FooterContentContainer,
  FooterFooter,
  FooterWrapper,
  Input,
  LogoSection,
  SocialIcon,
  SocialMediaWrapper,
} from '../../Styles/Footer'
import { GrFacebook, GrInstagram, GrTwitter, GrSearch } from 'react-icons/gr'
import { StickyTop } from '../Home/StickyTop'
// import axios from "axios";
import { useDispatch, useSelector } from 'react-redux'
import { getSearchData } from '../../Redux/SearchPage/action'
import { Redirect } from 'react-router'

const Footer = () => {
  const [search, setSearch] = React.useState(false)
  const [input, setInput] = React.useState('')
  const dispatch = useDispatch()
  const handleClick = () => {
    setSearch(true)
    dispatch(getSearchData(input))
  }
  return !search ? (
    <FooterWrapper>
      <FooterContentContainer>
        <div style={{ position: 'relative' }}>
          <Input
            placeholder='Search CNN'
            value={input}
            onChange={(e) => {
              setInput(e.target.value)
            }}
          />
          <button
            onClick={handleClick}
            style={{
              position: 'absolute',
              right: '5%',
              top: '5px',
              fontSize: '22px',
              backgroundColor: 'transparent',
              border: 'none',
            }}
          >
            <GrSearch />
          </button>
        </div>
        <CategoryWrapper>
          <div>
            <h3>World</h3>
            <p>Africa</p>
            <p>Americas</p>
            <p>Asia</p>
            <p>Australia</p>
            <p>China</p>
            <p>Europe</p>
            <p>India</p>
            <p>Middle East</p>
            <p>United Kingdom</p>
          </div>
          <div>
            <h3>US Politics</h3>
            <p>The Biden Presidency</p>
            <p>Facts First</p>
            <p>US Elections</p>
          </div>

          <div>
            <h3>Business</h3>
            <p>Markets</p>
            <p>Tech</p>
            <p>Media</p>
            <p>Success</p>
            <p>Perspectives</p>
            <p>Videos</p>
          </div>
          <div>
            <h3>Health</h3>
            <p>Food</p>
            <p>Fitness</p>
            <p>Wellness</p>
            <p>Parenting</p>
            <p>Vital Signs</p>
          </div>
          <div>
            <h3>Entertainment</h3>
            <p>Stars</p>
            <p>Screen</p>
            <p>Binge</p>
            <p>Culture</p>
            <p>Media</p>
          </div>
          <div>
            <h3>Tech</h3>
            <p>Innovate</p>
            <p>Gadget</p>
            <p>Foresseable Future</p>
            <p>Mission:Ahead</p>
            <p>Upstarts</p>
            <p>Work Transformed</p>
            <p>Innovative Cities</p>
          </div>
          <div>
            <h3>Travel</h3>
            <p>Destinations</p>
            <p>Food and Drink</p>
            <p>Stay</p>
            <p>News</p>
            <p>Videos</p>
          </div>
          <div>
            <h3>Sports</h3>
            <p>Football</p>
            <p>Tennis</p>
            <p>Equestrian</p>
            <p>Golf</p>
            <p>Skiing</p>
            <p>Horse Racing</p>
            <p>Motorsport</p>
            <p>Formula E</p>
            <p>Esports</p>
          </div>
          <div>
            <h3>Videos</h3>
            <p>Live TV</p>
            <p>Digital Studios</p>
            <p>CNN Films</p>
            <p>HLN</p>
          </div>
          <div>
            <h3>Features</h3>
            <p>As Equals</p>
            <p>Call to Earth</p>
            <p>Freedom Project</p>
            <p>Impact Your World </p>
            <p>Inside Africa </p>
            <p>2 Degrees</p>
            <p>CNN Heroes</p>
            <p>All Features</p>
          </div>
          <div>
            <h3>Weather</h3>
            <p>Climate</p>
            <p>Storm Tracker</p>
            <p>Wildfire Tracker</p>
            <p>Video</p>
          </div>
          <div>
            <h3>More</h3>
            <p>Photos</p>
            <p>Longform</p>
            <p>Investigations</p>
            <p>CNN Profiles</p>
            <p>CNN Leadership</p>
            <p>CNN Newsletters</p>
            <p>Work for CNN</p>
          </div>
        </CategoryWrapper>
        <SocialMediaWrapper>
          <LogoSection>
            <img
              src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgdmlld0JveD0iMCAwIDUwIDUwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiNDMDAiIGQ9Ik0wIDUxaDUxVjBIMHoiLz48ZyBmaWxsPSIjRkZGIj48cGF0aCBkPSJNMTAuMjc3IDI1LjVhMy44ODUgMy44ODUgMCAwIDEgMy44ODUtMy44ODVoMi45NDh2LTIuMmgtMi45NzJBNi4wOTIgNi4wOTIgMCAwIDAgOC4wNTIgMjUuNWE2LjA5MiA2LjA5MiAwIDAgMCA2LjA4NiA2LjA4Nmg1LjcyMmMuMzIgMCAuNTc3LS4zMTUuNTc3LS41NzVWMTkuNzM5YzAtLjYyMS4zOS0xLjE0NS45Ny0xLjMwMy40OTUtLjEzNiAxLjE4OC4wMDIgMS42NTEuNzg5bDMuNTcgNi4xNTNjMS42ODIgMi45IDMuNDIgNS44OTggMy40NTMgNS45NTIuMTguMzA0LjQyNy40NS42NjEuMzg2YS40NS40NSAwIDAgMCAuMzItLjQ1NVYxOS43MzljMC0uNjIzLjM5LTEuMTQ3Ljk2Ny0xLjMwMy40OS0uMTM0IDEuMTgyLjAwMiAxLjY0NS43ODlsMy4zMDggNS43MDNjMS44MDggMy4xMTcgMy42NzcgNi4zNDIgMy43MTMgNi40MDIuMTguMzA0LjQyNy40NS42NjIuMzg2YS40NDguNDQ4IDAgMCAwIC4zMjEtLjQ1NFYxNi4zMzNoLTIuMjA2djguODg4cy0zLjY4Ni02LjM0OC0zLjg1NS02LjYzNmMtMi4zNC0zLjk3NC02Ljc2LTIuMzMyLTYuNzYgMS4wOXY1LjU0NnMtMy42ODUtNi4zNDgtMy44NTUtNi42MzZjLTIuMzQtMy45NzQtNi43Ni0yLjMzMi02Ljc2MSAxLjA5djkuMDlhLjYwNS42MDUgMCAwIDEtLjYwOC42MmgtMy40N2EzLjg4NSAzLjg4NSAwIDAgMS0zLjg4Ni0zLjg4NSIvPjxwYXRoIGQ9Ik00Mi41NTggMTYuMzM0VjMxLjI2YzAgLjYyMy0uMzkgMS4xNDUtLjk3IDEuMzA1YTEuMzYyIDEuMzYyIDAgMCAxLS4zNDMuMDQ0Yy0uNDQgMC0uOTQ1LS4yMTYtMS4zMDktLjgzNWwtMy43MTUtNi40MDUtMy4zMDYtNS42OThjLS4xOC0uMzA1LS40MjUtLjQ1LS42NTUtLjM4OC0uMTQ2LjA0LS4zMTguMTg0LS4zMTguNDU1VjMxLjI2YzAgLjYyMy0uMzg5IDEuMTQ1LS45NjkgMS4zMDUtLjQ5NC4xMzQtMS4xODgtLjAwMy0xLjY1Mi0uNzlsLTMuNDU0LTUuOTU2Yy0xLjczOC0yLjk5NS0zLjUzNC02LjA5NC0zLjU2OC02LjE0OC0uMTgtLjMwNi0uNDI3LS40NS0uNjYxLS4zODdhLjQ0OC40NDggMCAwIDAtLjMyLjQ1NFYzMS4wMWMwIC43NzctLjY4MSAxLjQ1Ni0xLjQ1OCAxLjQ1NmgtNS43MjJjLTMuODQxIDAtNi45NjYtMy4xMjUtNi45NjYtNi45NjVhNi45NzQgNi45NzQgMCAwIDEgNi45NjYtNi45NjdoMi45NzJ2LTIuMmgtMi45N2E5LjE2NyA5LjE2NyAwIDEgMCAwIDE4LjMzM2g1Ljc3OGMyLjE5NS4wMDEgMy42MDgtMS4yODUgMy42MDUtMy42NlYyNS43OHMzLjY4NSA2LjM0OCAzLjg1NSA2LjYzNWMyLjM0IDMuOTc0IDYuNzYxIDIuMzMyIDYuNzYxLTEuMDg5VjI1Ljc4czMuNjg1IDYuMzQ4IDMuODU0IDYuNjM1YzIuMzQgMy45NzQgNi43NiAyLjMzMiA2Ljc2LTEuMDg5VjE2LjMzNGgtMi4xOTV6Ii8+PC9nPjwvZz48L3N2Zz4K'
              alt='cnn-logo'
            />
            <img
              src='https://verticals-static.cnn.com/style/assets/5d79c3744c3efdb10d51443a8f63a44b.svg'
              alt='style-logo'
            />
          </LogoSection>
          <SocialIcon>
            <h4>FOLLOW CNN</h4>
            <GrFacebook style={{ fontSize: '25px', margin: '0px 10px' }} />
            <GrTwitter style={{ fontSize: '25px', margin: '0px 10px' }} />
            <GrInstagram style={{ fontSize: '25px', margin: '0px 10px' }} />
          </SocialIcon>
        </SocialMediaWrapper>
        <FooterFooter>
          <div>
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
          </div>
          <p>
            © 2021 Cable News Network.A Warner Media Company.All Rights
            Reserved.
          </p>
          <p>CNN Sans ™ & © 2016 Cable News Network.</p>
        </FooterFooter>
      </FooterContentContainer>
    </FooterWrapper>
  ) : (
    <Redirect to='/searchpage' />
  )
}

export { Footer }
